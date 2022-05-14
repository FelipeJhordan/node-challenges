import { middlewares } from "../../infra/middlewares/middlewares.array";
import { Composite } from "./composite.pattern";

export class MiddlewaresComposite extends Composite {
    private middlewares: Composite[] = middlewares;
    public apply(func) {
        for (const middleware of this.middlewares) {
          func.use(middleware.apply());
        }
      }   
}