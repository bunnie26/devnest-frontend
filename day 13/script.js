const container = document.getElementById("para");
const image = document.getElementById("image");
document.addEventListener("load", gg());
function gg() {
  fetch("https://meme-api.herokuapp.com/gimme/2").then((response) => {
    response.json().then((data) => {
      console.log(data);
      image.src = data.memes[0].url;
    });
  });
}
