const lightBtn = document.querySelector('.light-control');
const controlBall = document.querySelector('.btn-ball');
const lampLight = document.querySelector('.light');
const introP1 = document.querySelector('.intro-p');
const introH1 = document.querySelector('.intro-h1');

lightBtn.addEventListener('click', () => {
  if (lightBtn.style.backgroundColor === 'green') {
    lightBtn.style.backgroundColor = '';
    controlBall.style.transform = 'translateX(0)';
    lampLight.style.visibility = 'hidden';
    introP1.style.color = '';
    introH1.style.color = '';
  } else {
    lightBtn.style.backgroundColor = 'green';
    controlBall.style.transform = 'translateX(180%)';
    lampLight.style.visibility = 'visible';
    introP1.style.color = '#FF3131';
    introH1.style.color = '#FFFFFF';
  }
})