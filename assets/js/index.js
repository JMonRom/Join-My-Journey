let myBtn = document.getElementById('btn-back-to-top');

window.onscroll = function () {
  scrollFunc();
}

function scrollFunc() {
  if (
    document.body.scrollTop >20 || 
    document.documentElement.scrollTop >20
  ) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = 'none';
  }
}

myBtn.addEventListener('click', backUp);

function backUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}