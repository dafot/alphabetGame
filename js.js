"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/

const audioClick = new Audio("audio/Mountain Audio - Menu Click.mp3");
const boxes = document.querySelector(".boxes");
let newLetters;
const audioWin = new Audio("audio/huge win.wav");

boxes.addEventListener("click", (e) => {
  if (e.target.previousElementSibling != null) {
    if (e.target.classList.contains("boxes__box")) {
      e.target.previousElementSibling.before(e.target);
      audioClick.play();
      newLetters = document.querySelectorAll(".boxes__box");
    }
  } else if (e.target.nextElementSibling != null) {
    if (e.target.classList.contains("boxes__box")) {
      e.target.nextElementSibling.after(e.target);
      audioClick.play();
      newLetters = document.querySelectorAll(".boxes__box");
    }
  }
  if (
    newLetters[0].classList.contains("box_a") &&
    newLetters[1].classList.contains("box_b") &&
    newLetters[2].classList.contains("box_c") &&
    newLetters[3].classList.contains("box_d") &&
    newLetters[4].classList.contains("box_e") &&
    newLetters[5].classList.contains("box_f")
  ) {
    audioWin.play();
  }
});
