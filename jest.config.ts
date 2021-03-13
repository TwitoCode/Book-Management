import { Config } from "@jest/types";

const config: Config.InitialOptions = {
	verbose: true,
	testEnvironment: "node",
	setupFiles: ["dotenv/config"],
	preset: "ts-jest",
	testPathDirs: ["./tests"],
};

export default config;
