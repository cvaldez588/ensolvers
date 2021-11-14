import { FindConditions, FindManyOptions, Repository } from "typeorm";
import { ErrorHandler } from "./error.commons";

export abstract class BaseService<T> {
    abstract getRepository(): Repository<T>;

    finddAll(): Promise<T[]> {
        try {
            return this.getRepository().find();
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }

    }

    findOne(id: any): Promise<T> {
        try {
            return this.getRepository().findOne(id);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }

    }

    save(entity: T): Promise<T> {
        try {
            return this.getRepository().save(entity);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }

    }

    saveMany(entities: T[]): Promise<T[]> {
        try {
            return this.getRepository().save(entities);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }

    }

    async delete(id: any) {
        try {
            await this.getRepository().delete(id);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }

    }

    count(options?: FindManyOptions<T>): Promise<number> {
        try {
            return this.getRepository().count(options);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }

    }

    find(conditions?: FindConditions<T>): Promise<T[]> {
        try {
            return this.getRepository().find(conditions);
        } catch (e) {
            throw new ErrorHandler().errorMessage(e);
        }

    };

}