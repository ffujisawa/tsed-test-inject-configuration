import {readFileSync} from "fs";
import { config as envs, isProduction } from "./envs/index";
import loggerConfig from "./logger/index";
const pkg = JSON.parse(readFileSync("./package.json", {encoding: "utf8"}));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  isProduction,
  logger: loggerConfig,
  // additional shared configuration
};
