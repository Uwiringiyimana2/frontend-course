const model = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-btn");

setTimeout(function() {
  model.style.display = "inline";
}, 1500)

modalClose.addEventListener('click', function() {
  model.style.display = "none";
})