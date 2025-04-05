document.getElementById("surpriseBtn").addEventListener("click", function () {
    const surpriseContent = document.getElementById("surpriseContent");
    surpriseContent.style.display = "block";
    this.style.display = "none";
    window.scrollTo({
      top: surpriseContent.offsetTop,
      behavior: "smooth"
    });
  });
  