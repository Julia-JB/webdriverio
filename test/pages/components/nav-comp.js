class NavComponent {
  get navLinks() {
    return $("#primary-menu").$$("li[id*=menu]");
  }
}

export default new NavComponent();
