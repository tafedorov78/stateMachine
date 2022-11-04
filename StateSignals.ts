import { Signal } from "typed-signals";

export default {
  stateChanged: new Signal<(id: string) => void>(),
};
