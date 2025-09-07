import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
    {
        files: ["**/*.js"],
        plugins: {
            js,
        },
        extends: ["js/recommended", "plugin:prettier/recommended"],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
        },
    },
]);
