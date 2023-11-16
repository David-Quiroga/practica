import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosController } from './alumnos/alumnos.controller';
import { AlumnosService } from './alumnos/alumnos.service';

@Module({
  imports: [],
  controllers: [AppController, AlumnosController],
  providers: [AppService, AlumnosService],
})
export class AppModule {}
