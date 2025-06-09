const play = (index) => {
  console.log(index);
};

const whoWin = (n1, n2) => {
  const imagesss = ["tosh", "qaychi", "qogoz"];
  const img = document.createElement("img");
  const randNum = randomPlay();
  const compImg = document.getElementById("compImg")
  compImg.outerHTML = `<img src="images/${imagesss[randNum]}.png" alt="rasm" id="compImg">`;
  if (randNum == n1) {
    document.getElementById("win").style.display = "block";
    setTimeout(() => {
      document.getElementById("win").style.display = "none";
    }, 1500);
  } else if (randNum == n2) {
    document.getElementById("lost").style.display = "block";
    setTimeout(() => {
      document.getElementById("lost").style.display = "none";
    }, 1500);
  } else {
    document.getElementById("draw").style.display = "block";
    setTimeout(() => {
      document.getElementById("draw").style.display = "none";
    }, 1500);
  }
};

const img0 = document.querySelector("#images0");
const img1 = document.querySelector("#images1");
const img2 = document.querySelector("#images2");

const randomPlay = () => Math.floor(Math.random() * 3);

img0.addEventListener("click", () => {
  whoWin(1, 2);
});

img1.addEventListener("click", () => {
  whoWin(2, 0);
});

img2.addEventListener("click", () => {
  whoWin(0, 1);
});
