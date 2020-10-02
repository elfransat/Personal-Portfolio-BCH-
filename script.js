const button = document.getElementById("myButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

const topFunction = () => {
  document.body.scrolltop = 0; // for Safari
  document.documentElement.scrollTop = 0; //Other browsers
};
