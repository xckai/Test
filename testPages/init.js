class PopUpInfo extends HTMLElement {
  constructor() {
    // 必须首先调用 super方法
    super();
    var shadow = this.attachShadow({ mode: 'closed' });
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    var info = document.createElement('span');
    info.setAttribute('class', 'info');

    // 获取属性的内容并将内容添加到 info 元素内
    var text = this.getAttribute('text');
    info.textContent = text + 'result';
    wrapper.appendChild(info);
    shadow.appendChild(wrapper);
  }
}
customElements.define('popup-info', PopUpInfo);
class PopUpInfoOpen extends HTMLElement {
  constructor() {
    // 必须首先调用 super方法
    super();
    var shadow = this.attachShadow({ mode: 'open' });
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    var info = document.createElement('span');
    info.setAttribute('class', 'info');

    // 获取属性的内容并将内容添加到 info 元素内
    var text = this.getAttribute('text');
    info.textContent = text + 'result';
    wrapper.appendChild(info);
    shadow.appendChild(wrapper);
  }
}
customElements.define('popup-info-open', PopUpInfoOpen);
