use tauri;

pub trait KitstoryPluginBuilder {
    fn with_kitstory_core(self) -> Self;
}

impl<R: tauri::Runtime> KitstoryPluginBuilder for tauri::Builder<R> {
    fn with_kitstory_core(self) -> tauri::Builder<R> {
        self.plugin(tauri_plugin_os::init())
            .plugin(tauri_plugin_dialog::init())
            .plugin(tauri_plugin_notification::init())
            .plugin(tauri_plugin_positioner::init())
    }
}
