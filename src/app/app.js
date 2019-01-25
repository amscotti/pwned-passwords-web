import angular from "angular";

import { app, password } from "./components";
import { Haveibeenpwned, Hasing } from "./services";

angular
  .module("app", [])
  .service("haveibeenpwned", Haveibeenpwned)
  .service("hasing", Hasing)
  .component("app", app)
  .component("password", password);
