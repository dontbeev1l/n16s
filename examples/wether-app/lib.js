
class ComponentsLoader {
  run(componentsBasePath) {
    this.componentsBasePath = componentsBasePath || './';
    this.load('app-root');
  }

  load(...args) {
    args.forEach(component => this.#addComponent(component));
    return this;
  }

  async #addComponent(component) {
    const script = document.createElement('script');
    script.setAttribute('src', this.componentsBasePath + component + '.component.js');
    document.body.appendChild(script);
  }
}

const CL = new ComponentsLoader();

class N16SElement extends HTMLElement {
  static registrate(html, component) {

    const name = component.name
      .replace('Component', '')
      .split('')
      .reduce((newName, l, i) => newName + (l === l.toUpperCase() ? (i > 0 ? '-' : '') + l.toLowerCase() : l), '');

    const template = document.createElement('template');

    template.id = component.name.replace('Component', 'Template');
    template.innerHTML = html;
    document.body.appendChild(template);
    window.customElements.define(name, component);
  }

  constructor() {
    super();
    const tempalteId = this.localName.split('').reduce(([value, nextCapital], l) => {
      if (l === '-') return [value, true];
      if (nextCapital) return [value + l.toUpperCase(), false];
      return [value + l, false]
    }, ['', true])[0] + 'Template';

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(document.getElementById(tempalteId).content.cloneNode(true));
  }

  deps(...components) {
    CL.load(...components);
  }
}