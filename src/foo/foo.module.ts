import { DynamicModule, Module } from '@nestjs/common';
import { BarModule } from '../bar/bar.module';
import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  FooModuleOptions,
  MODULE_OPTIONS_TOKEN,
} from './foo-module-definition';

@Module({})
export class FooModule extends ConfigurableModuleClass {
  static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    const moduleDefinition = super.registerAsync(options);
    moduleDefinition.imports?.push(
      BarModule.registerAsync({
        inject: [MODULE_OPTIONS_TOKEN],
        useFactory(options) {
          const optionsAsFooModuleOptions = options as FooModuleOptions;
          return {
            hostname: optionsAsFooModuleOptions.host,
          };
        },
      }),
    );

    return moduleDefinition;
  }
}
