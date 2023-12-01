class TextArea {
  constructor() {
    this.el = document.querySelector(".textarea__input");
  }

  update(userInput) {
    this.el.value = this.el.value.slice(0, this.el.value.length - 1);
    this.el.value += `${userInput}_`;
  }

  erase() {
    this.el.value = this.el.value.slice(0, this.el.value.length - 1);
  }
}

const textarea = new TextArea();

export default textarea;
