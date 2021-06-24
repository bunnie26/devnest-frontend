const start_btn = document.querySelector(".start-button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
// const next_btn = document.querySelector(".next_btn");


// if start button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

// if exit button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

// if continue button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
};
// continue_btn.onclick = () => {
//     quiz_box.classList.remove("activeQuiz");
//     next_btn.classList.add("activeNext");
//   };