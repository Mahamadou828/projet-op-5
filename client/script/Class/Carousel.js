export default class Carousel {
  /**
   * @param {HtmlElement} element
   * @param {Array} element du carousel
   * @param {Object} options
   * @param {Object} options.slidesToScroll Nombre d'element a faire defiler
   * @param {Object} options.slidesVisible Nombre d'element visible dans un slide
   */

  constructor(element, item, options = {}) {
    this.element = element;
    let children = item;
    this.isMobile = true;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );

    this.currentItem = 0;

    this.root = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("carousel__container");

    this.root.appendChild(this.container);
    this.element.appendChild(this.root);

    this.items = children.map((child) => {
      this.container.appendChild(child);
      return child;
    });
    this.onWindownResize();
    this.setStyle();
    this.createNavigation();
    window.addEventListener("resize", this.onWindownResize.bind(this));
  }

  /**
   * Applique les bonnes dimensions au elements du carousel
   */
  setStyle() {
    let ratio = this.items.length / this.slidesVisible;
    this.container.style.width = `${ratio * 100}%`;
    this.items.forEach((item) => {
      item.style.width = `${90 / this.slidesVisible / ratio}%`;
    });
  }

  /**
   *
   * @param {String} className
   * @returns {HtmlElement}
   */

  createDivWithClass(className) {
    const div = document.createElement("div");
    div.className = className;
    return div;
  }

  /**
   * Defini les boutons de navigation
   */
  createNavigation() {
    let nextButton = this.createDivWithClass("carousel__next");
    let prevButton = this.createDivWithClass("carousel__prev");
    this.root.appendChild(nextButton);
    this.root.appendChild(prevButton);

    nextButton.addEventListener("click", this.next.bind(this));
    prevButton.addEventListener("click", this.prev.bind(this));
  }

  /**
   * Permet d'assurer le responsive du carousel
   */
  onWindownResize() {
    let mobile = window.innerWidth < 800;
    if (mobile !== this.isMobile) {
      this.isMobile = mobile;
      this.setStyle();
    }
  }

  next() {
    this.goToItem(this.currentItem + this.slidesToScroll);
  }

  prev() {
    this.goToItem(this.currentItem - this.slidesToScroll);
  }

  /**
   * Deplace le carousel
   * @param {number} index
   */
  goToItem(index) {
    if (index < 0) {
      this.currentItem = this.items.length - this.slidesToScroll;
    } else if (index >= this.items.length) {
      this.currentItem = 0;
    } else {
      this.currentItem = index;
    }

    let translateX = (-100 / this.items.length) * this.currentItem;
    this.container.style.transform = `translate3d(${translateX}%, 0, 0)`;
  }

  /**
   * @return {number}
   */
  get slidesToScroll() {
    return this.isMobile ? 1 : this.options.slidesToScroll;
  }

  get slidesVisible() {
    return this.isMobile ? 1 : this.options.slidesVisible;
  }
}
