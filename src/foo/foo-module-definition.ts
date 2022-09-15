import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface FooModuleOptions {
  host: string;
  port: number;
}

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<FooModuleOptions>().build();
