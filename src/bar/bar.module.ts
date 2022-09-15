import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './bar-module-definition';

@Module({})
export class BarModule extends ConfigurableModuleClass {}
