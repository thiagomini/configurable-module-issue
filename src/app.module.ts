import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [
    FooModule.registerAsync({
      useFactory: () => ({
        host: 'localhost',
        port: 5432,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
