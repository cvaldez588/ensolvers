import { FindConditions, FindManyOptions, Repository } from "typeorm";

export abstract class BaseService<T> {
    abstract getRepository(): Repository<T>;

    finddAll() : Promise<T[]> {
        return this.getRepository().find();
    }

    findOne(id: any): Promise<T>  {
        return this.getRepository().findOne(id);
    }


    save(entity: T) : Promise<T> {
        return this.getRepository().save(entity);
    }

    saveMany(entities: T[]) : Promise<T[]> {
        return this.getRepository().save(entities);
    }

    async delete(id: any) {
        await this.getRepository().delete(id);
    }

    count(options?: FindManyOptions<T>) : Promise<number> {
        return this.getRepository().count(options);
    }

    find(conditions?: FindConditions<T>): Promise<T[]> {
        return this.getRepository().find(conditions);
    };

}