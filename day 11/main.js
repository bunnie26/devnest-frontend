const start_btn = document.querySelector(".start-button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .exit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
// const next_btn = document.querySelector(".next_btn");
const option_list = document.querySelector(".option_list");

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
  showQuestions(0);
  queCounter(1);
};


const next_btn = quiz_box.querySelector(".next_btn")
const result_box = document.querySelector(".result_box")
const restart_quiz = result_box.querySelector(" buttons .restart")
const quit_quiz = result_box.querySelector(" buttons .quit")

// if next button clicks
next_btn.onclick = () =>{
  if (que_count < questions.length -1){
    que_count++
    que_numb++
    showQuestions(que_count)
    queCounter(que_numb);
    next_btn.style.display = "none";
  }else{
    console.log("questions completed")
    showresultbox();
  }
}


let que_count = 0;
let que_numb = 1;

function showQuestions(i) {
  const que_text = document.querySelector(".que_text");
  
  let que_tag = "<span>" + questions[i].numb +". " + questions[i].question + "</span>";
  let option_tag = '<div class="option">'+ questions[i].options[0] +'<span></span></div>'
                  + '<div class="option">'+ questions[i].options[1] +'<span></span></div>'
                  + '<div class="option">'+ questions[i].options[2] +'<span></span></div>'
                  + '<div class="option">'+ questions[i].options[3] +'<span></span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i<option.length ; i++){
    option[i].setAttribute("onclick","optionSelected(this)");
  }
}

let tickicon = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossicon = '<div class="icon cross"><i class="fas fa-times"></i></div>'


function optionSelected(answer){
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if(userAns == correctAns){
    answer.classList.add("correct")
    console.log("answer is correct")
    answer.insertAdjacentHTML("beforeend",tickicon)
  }
  else{
    answer.classList.add("incorrect")
    console.log("answer is wrong")
    answer.insertAdjacentHTML("beforeend",crossicon)

    // if ans is incorrect , select right ans 
    for (let i = 0; i< allOptions ; i++){
      if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class","option correct")
        option_list.children[i].insertAdjacentHTML("beforeend",tickicon)
      }
    }
  }
  

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled") ; 
    // next_btn.style.display = "block";
  }
  next_btn.style.display = "block";
}
function showresultbox(){
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
}

function queCounter(i){
  const bottom_ques_counter = quiz_box.querySelector(".total_que")
  let totalQuesCountTag = '<span><p>'+ i +'</p>of<p>'+ questions.length +'</p>Questions</span>'
  bottom_ques_counter.innerHTML = totalQuesCountTag
}