N16SElement.registrate(
  /*html*/`
    <app-card>card 1</app-card>
    <app-card>card 2</app-card>
    <app-card>card 3</app-card>
  `,
  class AppRootComponent extends N16SElement {
    constructor() {
      super();
      this.deps('app-card');
    }
  }
)