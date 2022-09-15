import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface BarModuleOptions {
  hostname: string;
}

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<BarModuleOptions>().build();
