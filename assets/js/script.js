let startBtn = document.getElementById("start-button");
let nextBtn = document.getElementById("next-button");
let firstPage = document.getElementById("page-1");
let secondPage = document.getElementById("page-2");
let thirdPage = document.getElementById("page-3");
let allPages = [firstPage, secondPage, thirdPage];
let i = 0;

function pageChange() {
 
  allPages[i].classList.add("hide");
  i++;
  allPages[i].classList.remove("hide");
  console.log(i);
}

function startQuiz() {
  pageChange();
  console.log(i);
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", pageChange);