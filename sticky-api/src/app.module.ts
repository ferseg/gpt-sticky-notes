import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StickyNotesModule } from './sticky-notes/sticky-notes.module';

@Module({
  imports: [StickyNotesModule],
  controllers: [AppController],
  providers: [AppService],
  //middlewares: [CorsMiddleware],
})
export class AppModule {
}
