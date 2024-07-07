class Dropdown {
  constructor(element) {
    this.dropdown = element;
    this.toggle = element.querySelector(".dropdown-toggle");
    this.menu = element.querySelector(".dropdown-menu");
    this.trigger = element.dataset.trigger || "click";

    this.addEventListeners();
  }

  addEventListeners() {
    if (this.trigger === "click") {
      this.toggle.addEventListener("click", () => this.toggleMenu());
      document.addEventListener("click", (e) => this.closeIfClickedOutside(e));
    } else if (this.trigger === "hover") {
      this.dropdown.addEventListener("mouseenter", () => this.showMenu());
      this.dropdown.addEventListener("mouseleave", () => this.hideMenu());
    }
  }

  toggleMenu() {
    this.menu.classList.toggle("visible");
  }

  showMenu() {
    this.menu.classList.add("visible");
  }

  hideMenu() {
    this.menu.classList.remove("visible");
  }

  closeIfClickedOutside(event) {
    if (
      !this.dropdown.contains(event.target) &&
      this.menu.classList.contains("visible")
    ) {
      this.hideMenu();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => new Dropdown(dropdown));
});
