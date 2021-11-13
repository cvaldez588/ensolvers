import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/environment';
import { FolderModule } from './folder/folderModule';
import { WorkModule } from './work/workModule';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: environment.host,
      port: environment.portDB,
      username: environment.username,
      password: environment.password,
      database: environment.database,
      autoLoadEntities: true
    }),
    FolderModule,
    WorkModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
