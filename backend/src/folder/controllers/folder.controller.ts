import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.common";
import { BaseService } from "src/commons/service.commons";
import { Folder } from "../entities/folder.entity";
import { FolderService } from "../services/folder.service";

@Controller('api/folder')
export class FolderController extends BaseController<Folder> {
    constructor(private readonly folderService: FolderService) {
        super();
    }
    getService(): BaseService<Folder> {
        return this.folderService;
    }
}