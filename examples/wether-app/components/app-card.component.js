N16SElement.registrate(
  /*html*/`
   <div style="
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 8px;
    box-shadow: 1px 1px 3px #000
   ">
      <slot></slot>
   </div>
  `,
  class AppCardComponent extends N16SElement {
    constructor() {
      super();
    }
  }
)