export interface IUsecase<T, J> {
  execute: (data: T) => Promise<J>;
}
