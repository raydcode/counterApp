const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

const setColor = () => {
  if (count.innerHTML > 0) {
    count.style.color = 'orange';
  } else if (count.innerHTML < 0) {
    count.style.color = 'pink';
  } else {
    count.style.color = 'white';
  }
};

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('up')) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains('down')) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
    setColor();
  }
});
