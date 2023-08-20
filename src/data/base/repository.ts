export abstract class BaseRepository<T> implements IWriter<T>, IReader<T> {
  create(item: T): Promise<boolean> {
    throw new Error("Method not implemented");
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented");
  }
  getMany(item: T): Promise<T[]> {
    throw new Error("Method not implemented");
  }
  get(id: string): Promise<T> {
    throw new Error("Method not implemented");
  }
  find(value: string): Promise<T[]> {
    throw new Error("Method not implemented");
  }
}

export interface IWriter<T> {
  create(item: T): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}

export interface IReader<T> {
  getMany(item: T): Promise<T[]>;
  find(value: string): Promise<T[]>;
  get(id: string): Promise<T>;
}