import { CLASSNAMES } from '../Consts';

export default class Container {
  constructor(config, state) {
    this._config = config;
    this._state = state;
    this._containerWidth = config.containerWidth;
    this.containerElement = config.container;
  }

  render() {
    const {
      wrapper, container, containerWidth, slideCount,
    } = this._config;
    const slideWidth = `${100 / slideCount}%`;
    const slides = container.children;

    wrapper.classList.add(CLASSNAMES.wrapper);
    wrapper.style.width = `${containerWidth}px`;

    container.classList.add(CLASSNAMES.container);
    container.style.width = `${containerWidth * slideCount}px`;

    [...slides].forEach((slideItem) => {
      slideItem.classList.add(CLASSNAMES.slideItem);
      slideItem.style.width = slideWidth;
    });
  }

  moveTo(page = this._state.currentPage) {
    this.containerElement.style.transform = `translateX(${-1 * page * this._containerWidth}px)`;
  }
}
