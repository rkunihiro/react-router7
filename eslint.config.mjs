import js from "@eslint/js";
import ts from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        ignores: [
            "dist/",
            "node_modules/",
        ],
    },
];
