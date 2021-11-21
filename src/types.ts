interface Options {
  compileAsModule: boolean;
  compileForElectron: boolean;
  debugLifecycle: boolean;
  debugLogs: boolean;
  keepSource: boolean;
  preventSourceMaps: boolean;
  silent: boolean;
  root: string;
  rootExclude: RegExp | string;
}

interface Prepared {
  extension: string;
  locations: PreparedLocation[];
  name: string;
}

interface PreparedLocation {
  dependency: boolean;
  location: string;
}

interface PreprocessedEntry {
  entry: Prepared;
  compiled: Prepared;
  loader: Prepared;
}

interface PreprocessedOutput {
  dynamic: boolean;
  extension: string;
  filename: string;
  name?: string;

  of(name: string): string;
}

interface ProcessedOptions {
  entry: Record<string, any>;
  entryLoaders: string[];
  externals: string[];
  output: PreprocessedOutput;
  virtualModules: Record<string, string>;
}

export type {
  Options,
  Prepared,
  PreprocessedEntry,
  PreprocessedOutput,
  ProcessedOptions,
};
