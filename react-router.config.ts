import type { Config } from "@react-router/dev/config";

export default {
    appDirectory: "src",
    serverModuleFormat: "esm",
    buildDirectory: "dist",
    ssr: true,
} satisfies Config;
