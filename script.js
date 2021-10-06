class Keyboard {
  constructor() {
    this.input = document.getElementsByClassName("text-field")[0];
    this.shift = false;
    this.caps = false;
  }

  initialize() {
    this.initNumberKeys();
    this.initLetterKeys();
    this.initPunctuationKeys();
    this.initFunctionalKeys();
    this.initOtherKeys();
  }

  initLetterKeys() {
    const keys = [...document.getElementsByClassName("letter-key")];

    keys.forEach((key) => {
      key.addEventListener("click", () => {
        let letter = key.textContent;

        if (this.shift || this.caps) {
          letter = letter.toUpperCase();
        }

        this.input.value += letter;
      });
    });
  }

  initPunctuationKeys() {
    const keys = [...document.getElementsByClassName("punctuation-key")];

    keys.forEach((key) =>
      key.addEventListener("click", () => (this.input.value += key.textContent))
    );
  }

  initNumberKeys() {
    const keys = [...document.getElementsByClassName("number-key")];

    keys.forEach((key) => {
      key.addEventListener(
        "click",
        () => (this.input.value += key.textContent)
      );
    });
  }

  initFunctionalKeys() {
    const shift = document.getElementsByClassName("shift")[0];
    const capslock = document.getElementsByClassName("capslock")[0];
    const backspace = document.getElementsByClassName("backspace")[0];

    shift.addEventListener("click", () => {
      if ([...shift.classList].includes("active")) {
        this.shift = false;
        shift.classList.remove("active");
        this.displayNumbers();
      } else {
        this.shift = true;
        shift.classList.add("active");
        this.displaySymbols();
      }

      this.uppercaseLetters(shift, capslock);
    });

    capslock.addEventListener("click", () => {
      if ([...capslock.classList].includes("active")) {
        capslock.classList.remove("active");
        this.caps = false;
      } else {
        capslock.classList.add("active");
        this.caps = true;
      }

      this.uppercaseLetters(shift, capslock);
    });

    backspace.addEventListener(
      "click",
      () =>
        (this.input.value = this.input.value.slice(
          0,
          this.input.value.length - 1
        ))
    );
  }

  initOtherKeys() {
    const spacebar = document.getElementsByClassName("spacebar")[0];
    const enter = document.getElementsByClassName("enter")[0];

    spacebar.addEventListener("click", () => (this.input.value += " "));
    enter.addEventListener("click", () => (this.input.value += "\n"));
  }

  uppercaseLetters(sh, caps) {
    const letterKeys = [...document.getElementsByClassName("letter-key")];

    const shiftCheck = (() =>
      [...sh.classList].includes("active") ? true : false)();
    const capsCheck = (() =>
      [...caps.classList].includes("active") ? true : false)();

    if (shiftCheck && capsCheck) return;

    if ((shiftCheck || capsCheck) && ![...letterKeys[0].classList].includes("with-shift"))
      return letterKeys.forEach((key) => key.classList.add("with-shift"));

    if (!shiftCheck && !capsCheck)
      return letterKeys.forEach((key) => key.classList.remove("with-shift"));
  }

  displaySymbols() {
    const keys = [...document.getElementsByClassName("number-key")];
    const dash = document.getElementsByClassName("dash")[0];
    const plus = document.getElementsByClassName("plus")[0];

    dash.textContent = "_";
    plus.textContent = "+";

    keys.forEach((key) => {
      const number = key.textContent;
      let symbol;

      switch (number) {
        case "1":
          symbol = "!";
          break;
        case "2":
          symbol = "@";
          break;
        case "3":
          symbol = "#";
          break;
        case "4":
          symbol = "$";
          break;
        case "5":
          symbol = "%";
          break;
        case "6":
          symbol = "^";
          break;
        case "7":
          symbol = "&";
          break;
        case "8":
          symbol = "*";
          break;
        case "9":
          symbol = "(";
          break;
        case "0":
          symbol = ")";
          break;
        default:
          break;
      }

      key.textContent = symbol;
    });
  }

  displayNumbers() {
    const keys = [...document.getElementsByClassName("number-key")];
    const dash = document.getElementsByClassName("dash")[0];
    const plus = document.getElementsByClassName("plus")[0];

    dash.textContent = "-";
    plus.textContent = "=";

    keys.forEach((key) => {
      const symbol = key.textContent;
      let number;

      switch (symbol) {
        case "!":
          number = "1";
          break;
        case "@":
          number = "2";
          break;
        case "#":
          number = "3";
          break;
        case "$":
          number = "4";
          break;
        case "%":
          number = "5";
          break;
        case "^":
          number = "6";
          break;
        case "&":
          number = "7";
          break;
        case "*":
          number = "8";
          break;
        case "(":
          number = "9";
          break;
        case ")":
          number = "0";
          break;
        default:
          break;
      }

      key.textContent = number;
    });
  }
}

const keyboard = new Keyboard();

window.addEventListener("DOMContentLoaded", () => keyboard.initialize());

