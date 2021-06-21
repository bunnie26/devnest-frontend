const parent = document.getElementById("seats");
let total = 36;
for (let i = 0; i < 36; i++) {
  let block = document.createElement("div");
  block.className = "seat";
  parent.appendChild(block);
}
// console.log(parent)
const gg = document.querySelectorAll(".seat");
const text = document.getElementById("occupied");
gg.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("woopah");
    if (i.classList.contains("woopah")) {
      total -=1
      text.innerHTML = `Remaining: ${total}`;
    }
    else{
      total+=1
      text.innerHTML = `Remaining: ${total}`;
    }
  });
});
