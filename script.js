let wrapper = document.querySelector("#fork-btn-wrapper");
let image = document.querySelector("#image");
let buttons = document.querySelectorAll(".btn-wrapper");

image.onclick = () => {
  buttons.forEach((value, index) => {
    buttons[index].classList.toggle("animate");
  });
};

function buttonClicked(e) {
  alert(`You clicked: ${e.innerHTML}`);
}