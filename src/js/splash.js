const preloaderEnd = document.getElementById("preloader-end");

preloaderEnd.addEventListener("animationend", () => {
  location.href="main.html";
});