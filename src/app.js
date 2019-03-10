import Model from "./components/model";
import Controller from "./components/controller";
import View from "./components/view";

export default (function () {
  const model = Model();
  const controller = Controller(model);
  const view = View(controller);
  model.subscribe(view);
  model.initialize();
}());
