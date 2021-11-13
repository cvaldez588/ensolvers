import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Work } from "../entities/work.entity";

export class WorkService extends BaseService<Work> {
    
    constructor(@InjectRepository(Work) private workRepo: Repository<Work>) {
        super();
    }

    getRepository(): Repository<Work> {
        return this.workRepo;
    }

}