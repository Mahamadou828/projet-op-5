/**
 * Objet qui definis l'animation de slide
 */
export default class DOMAnimation {
  /**
   * Masque un element avec un effet de replie
   * @param {HTMLElement} element
   * @param {Number} duration
   */
  static slideUp(element, duration = 500) {
    element.style.height = `${element.offsetHeight}px`;
    element.style.transition = `all ${duration}ms`;
    element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(function () {
      element.style.display = "none";
      element.style.removeProperty("height");
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-bottom");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
      element.style.removeProperty("transition-timing-function");
      element.style.removeProperty("transition-delay");
    }, duration);
  }

  /**
   * Masque un element avec un effet de deplie
   * @param {HTMLElement} element
   * @param {Number} duration
   */
  static slideDown(element, duration = 500) {
    element.style.removeProperty("display");
    let display = window.getComputedStyle(element).display;
    if (display === "none") {
      display = "block";
    }
    element.style.display = window.getComputedStyle(element).display;
    let height = `${element.offsetHeight}px`;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight;
    element.style.transition = `all ${duration}ms`;
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    element.style.height = height;
    window.setTimeout(function () {
      element.style.display = display;
      element.style.removeProperty("heigth");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
      element.style.removeProperty("transition-timing-function");
      element.style.removeProperty("transition-delay");
    }, duration);
  }

  /**
   * Affiche ou masque un element selon son etat
   * @param {HTMLElement} element
   * @param {Number} duration
   */
  static slideToggle(element, duration = 500) {
    let display = window.getComputedStyle(element).display;

    if (display === "none") {
      this.slideDown(element, duration);
    } else {
      this.slideUp(element, duration);
    }
  }
}
