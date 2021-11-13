import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkController } from "./controllers/work.controller";
import { Work } from "./entities/work.entity";
import { WorkService } from "./services/work.service";

@Module({
    imports: [TypeOrmModule.forFeature([Work])],
    providers: [WorkService],
    controllers: [WorkController]
})
export class WorkModule {

}