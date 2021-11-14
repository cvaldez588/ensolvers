import { Body, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { ErrorHandler } from "./error.commons";
import { BaseService } from "./service.commons";

export abstract class BaseController<T> {
    abstract getService(): BaseService<T>;

    @Get('all')
    async finddAll(): Promise<T[]> {
        try {
            return await this.getService().finddAll();
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }
    }

    @Get('find/:id')
    async findOne(@Param('id') id): Promise<T> {
        try {
            return await this.getService().findOne(id);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T): Promise<T> {
        try {
            return await this.getService().save(entity);

        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }
    }

    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]): Promise<T[]> {
        try {
            return await this.getService().saveMany(entities);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }
    }

    @Delete('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        try {
            return this.getService().delete(id);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }
    }

    @Get('count')
    async count(): Promise<number> {
        try {
            return await this.getService().count();
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }
    }

}