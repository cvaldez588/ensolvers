import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Folder } from "../entities/folder.entity";

export class FolderService extends BaseService<Folder> {
    
    constructor(@InjectRepository(Folder) private folderRepo: Repository<Folder>) {
        super();
    }

    getRepository(): Repository<Folder> {
        return this.folderRepo;
    }

}