import type { KnipConfig } from "knip"

const config: KnipConfig = {
  ignore: ["apps/desktop/src-tauri/{build,target}/**"],
  ignoreDependencies: [
    "@biomejs/biome",
    "@fontsource/*",
    "tailwindcss"
  ],
}

export default config