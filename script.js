const starsEL = document.querySelectorAll(".fa-star");
const emojiEL = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);
starsEL.forEach((starsEL, index) => {
  starsEL.addEventListener("click", function () {
    // console.log("cliked", index);
    updateRating(index);
  });
});

function updateRating(index) {
  starsEL.forEach((starsEL, idx) => {
    if (idx < index + 1) {
      starsEL.classList.add("active");
    } else {
      starsEL.classList.remove("active");
    }
  });

  emojiEL.forEach((emojiEL) => {
    emojiEL.style.transform = `translateX(-${index * 50}px)`;
    emojiEL.style.color = colorsArray[index];
  });
}
