use tauri::{
    menu::{MenuBuilder, MenuItemBuilder},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Manager,
};
use tauri_plugin_deep_link::DeepLinkExt;

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_http::init())
        // persisted-scope plugin must be registered and initialized after the fs plugin
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_persisted_scope::init())
        .plugin(tauri_plugin_websocket::init())
        .plugin(tauri_plugin_autostart::Builder::new().build())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_positioner::init())
        .plugin(tauri_plugin_deep_link::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
            let _ = app
                .get_webview_window("main")
                .expect("no main window")
                .set_focus();
        }))
        // Deep links
        .setup(|app| {
            #[cfg(desktop)]
            app.deep_link().register("kitstory")?;

            #[cfg(any(windows, target_os = "linux"))]
            {
                use tauri_plugin_deep_link::DeepLinkExt;
                app.deep_link().register_all()?;
            }

            Ok(())
        })
        // Menu stuff
        .setup(|app| {
            let menu = MenuBuilder::new(app)
                /* This is where the quick access stuff in this area usually resides, but will be dynamically added via JS */
                .item(
                    &MenuItemBuilder::new("About Kitstory")
                        .id("spawn_about")
                        .build(app)?,
                )
                .item(
                    &MenuItemBuilder::new("Open/hide window")
                        .id("respawn")
                        .build(app)?,
                )
                .separator()
                .item(
                    &MenuItemBuilder::new("Login to Kitstory Cloud")
                        .id("ks_cloud_auth")
                        .build(app)?,
                )
                .separator()
                .item(
                    &MenuItemBuilder::new("Exit Kitstory")
                        .id("exit_app")
                        .build(app)?,
                )
                .build()?;

            TrayIconBuilder::new()
                .icon(app.default_window_icon().unwrap().clone())
                .menu(&menu)
                 .on_tray_icon_event(|tray, event| match event {
                    TrayIconEvent::Click {
                        button: MouseButton::Left,
                        button_state: MouseButtonState::Up,
                        ..
                    } => {
                        let app = tray.app_handle();
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.unminimize();
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                    }
                    _ => {}
                })
                .on_menu_event(|app, event| match event.id().as_ref() {
                    "exit_app" => {
                        // TODO: Might need to do some checks such as unsaved file changes or some shit
                        app.exit(0);
                    }
                    _ => {}
                })
                .build(app)?;

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
