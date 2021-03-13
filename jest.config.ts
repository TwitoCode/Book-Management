import { Config } from "@jest/types";

const config: Config.InitialOptions = {
	verbose: true,
	testEnvironment: "node",
	setupFiles: ["dotenv/config", "mongoose"],
	preset: "ts-jest",
	rootDir: "./tests",
};

export default config;
