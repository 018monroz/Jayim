const preloaderEnd = document.getElementById("preloader-end");
preloaderEnd.addEventListener("animationend", () => {
  location.href="../src/main.html";
});