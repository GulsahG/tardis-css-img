const doors = document.querySelector('.doors');
const windowLeft = document.querySelector('.windowl');
const windowRight=
document.querySelector('.windowr');

function setImage() {
  doors.classList.add('galaxy');
  windowLeft.classList.add('hide');
  windowRight.classList.add('hide');
}

doors.addEventListener('mouseover', setImage);
