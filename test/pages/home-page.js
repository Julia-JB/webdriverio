import NavComponent from "./components/nav-comp.js";

class HomePage {
  open() {
    return browser.url("/");
  }

  get NavComponent() {
    return NavComponent;
  }
}

export default new HomePage();
