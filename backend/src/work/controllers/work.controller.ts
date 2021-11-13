import { Controller, Get } from "@nestjs/common";
import { BaseController } from "src/commons/controller.common";
import { BaseService } from "src/commons/service.commons";
import { Work } from "../entities/work.entity";
import { WorkService } from "../services/work.service";

import { Param, Post } from "@nestjs/common";
import { FindConditions } from "typeorm";


@Controller('api/work')
export class WorkController extends BaseController<Work> {
    constructor(private readonly workService: WorkService) {
        super();
    }
    getService(): BaseService<Work> {
        return this.workService;
    }

    @Get('findbyfolder/:id')
    async  find(@Param('id') id: any): Promise<Work[]>  {
        const conditions: FindConditions<any> = 
        {where: {
            folder_id: id
        }};

        return await this.getService().find(conditions);
    }
}