const cards = document.querySelectorAll(".memory-card");

let locked = false;
let hasflippedcard = false;
let firstCard, secondCard;

function flipcard() {
  if (locked) return;
  if (this === firstCard) return;
  this.classList.toggle("flip");

  if (!hasflippedcard) {
    hasflippedcard = true;
    firstCard = this;
    // console.log({firstCard})
  } else {
    hasflippedcard = false;
    secondCard = this;
    // console.log(secondCard)
    checkforeach();
  }
}

function checkforeach() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.removeEventListener("click", flipcard);
    secondCard.removeEventListener("click", flipcard);
  } else {
    locked = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      locked = false;
    }, 1500);
  }
}

cards.forEach((card) => card.addEventListener("click", flipcard));
