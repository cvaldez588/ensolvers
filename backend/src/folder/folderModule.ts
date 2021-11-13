import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FolderController } from "./controllers/folder.controller";
import { Folder } from "./entities/folder.entity";
import { FolderService } from "./services/folder.service";

@Module({
    imports: [TypeOrmModule.forFeature([Folder])],
    providers: [FolderService],
    controllers: [FolderController]
})
export class FolderModule {

}