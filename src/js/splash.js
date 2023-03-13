const preloaderEnd = document.getElementById("preloader-end");

preloaderEnd.addEventListener("animationend", () => {
  location.href="../Jayim/src/main.html";
});