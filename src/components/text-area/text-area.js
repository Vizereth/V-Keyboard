class TextArea {
  constructor() {
    this.el = document.querySelector(".text-area__field");
  }

  update(userInput) {
    this.el.value += userInput;
  }

  erase() {
    this.el.value = this.el.value.slice(0, this.el.value.length - 1);
  }
}

const textarea = new TextArea();

export default textarea;
