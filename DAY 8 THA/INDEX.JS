const parent1 = document.getElementById("parent");

for (var i = 0; i < 400; i++) {
  let pix = document.createElement("div");
  pix.className = "pixel";
  parent1.appendChild(pix);
}
const gg = document.querySelectorAll(".pixel");
gg.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("demo");
  });
});
let frames = [
  33, 53, 65, 66, 67, 68, 73, 84, 85, 86, 87, 88, 89, 93, 102, 104, 106, 107,
  109, 111, 113, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 133, 144,
  145, 146, 147, 148, 149, 153, 165, 166, 167, 168, 173, 182, 183, 184, 187,
  188, 189, 193, 201, 202, 203, 204, 205, 207, 208, 209, 210, 213, 221, 222,
  223, 224, 225, 227, 228, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245,
  247, 248, 251, 252, 253, 261, 262, 263, 264, 265, 267, 268, 269, 273, 282,
  283, 284, 286, 287, 288, 289, 303, 305, 308, 325, 328, 345, 348, 365, 368,
];

frames.forEach((i) => {
  gg[i+2].classList.toggle("demo");
});

// document.getElementById("55").addEventListener("click", () => {
//   var list = [];
//   gg.forEach((i, index) => {
//     if (i.classList.contains("demo")) {
//       list.push(index);
//     }
//   });
//   console.log(list);
// });
