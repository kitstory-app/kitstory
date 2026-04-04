import type { KnipConfig } from "knip"

const config: KnipConfig = {
  ignore: ["packages/plugin-sdk/**"],
  ignoreDependencies: ["@biomejs/biome", "@fontsource/*", "tailwindcss"],
}

export default config
