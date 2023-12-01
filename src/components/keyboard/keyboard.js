import textarea from "../text-area/text-area.js";

class Keyboard {
  constructor() {
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
    const keys = document.querySelectorAll(".letter-key");

    keys.forEach((key) => {
      key.addEventListener("click", () => {
        let letter = key.textContent;

        if (this.shift || this.caps) {
          letter = letter.toUpperCase();
        }

        textarea.update(letter);
      });
    });
  }

  initPunctuationKeys() {
    const keys = document.querySelectorAll(".punctuation-key");

    keys.forEach((key) => {
      key.addEventListener("click", () => {
        const symbol = key.textContent;
        textarea.update(symbol);
      });
    });
  }

  initNumberKeys() {
    const keys = document.querySelectorAll(".number-key");

    keys.forEach((key) => {
      key.addEventListener("click", () => {
        const symbol = key.textContent;
        textarea.update(symbol);
      });
    });
  }

  initFunctionalKeys() {
    const shift = document.querySelector(".shift");
    const capslock = document.querySelector(".capslock");
    const backspace = document.querySelector(".backspace");

    shift.addEventListener("click", () => {
      if (shift.classList.contains("active")) {
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
      if (capslock.classList.contains("active")) {
        capslock.classList.remove("active");
        this.caps = false;
      } else {
        capslock.classList.add("active");
        this.caps = true;
      }

      this.uppercaseLetters(shift, capslock);
    });

    backspace.addEventListener("click", () => textarea.erase());
  }

  initOtherKeys() {
    const spacebar = document.querySelector(".spacebar");
    const enter = document.querySelector(".enter");

    const spaceSymbol = " ";
    const enterSymbol = "\n";

    spacebar.addEventListener("click", () => textarea.update(spaceSymbol));
    enter.addEventListener("click", () => textarea.update(enterSymbol));
  }

  uppercaseLetters(sh, caps) {
    const letterKeys = document.querySelectorAll(".letter-key");

    const shiftCheck = (() =>
      sh.classList.contains("active") ? true : false)();
    const capsCheck = (() =>
      caps.classList.contains("active") ? true : false)();

    if (shiftCheck && capsCheck) return;

    if (
      (shiftCheck || capsCheck) &&
      !letterKeys[0].classList.contains("with-shift")
    )
      return letterKeys.forEach((key) => key.classList.add("with-shift"));

    if (!shiftCheck && !capsCheck)
      return letterKeys.forEach((key) => key.classList.remove("with-shift"));
  }

  displaySymbols() {
    const keys = document.querySelectorAll(".number-key");
    const dash = document.querySelector(".dash");
    const plus = document.querySelector(".plus");

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
    const keys = document.querySelectorAll(".number-key");
    const dash = document.querySelector(".dash");
    const plus = document.querySelector(".plus");

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
