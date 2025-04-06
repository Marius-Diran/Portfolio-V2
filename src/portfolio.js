const lightBtn = document.querySelector('.light-control');
const controlBall = document.querySelector('.btn-ball');
const lampLight = document.querySelector('.light');
const introP1 = document.querySelector('.intro-p');
const introH1 = document.querySelector('.intro-h1');
const boxes = document.querySelectorAll('.box');

lightBtn.addEventListener('click', () => {
  const isMobileView = window.matchMedia('(max-width: 640px)').matches; // Tailwind's max-sm breakpoint

  if (lightBtn.style.backgroundColor === 'green') {
    lightBtn.style.backgroundColor = '';
    controlBall.style.transform = 'translateX(0)';
    lampLight.style.visibility = 'hidden';
    introP1.style.color = '';
    introH1.style.color = '';
  } else {
    lightBtn.style.backgroundColor = 'green';
    if (isMobileView) {
      controlBall.style.transform = 'translateX(110%)';
    } else {
      controlBall.style.transform = 'translateX(180%)';
    }
    lampLight.style.visibility = 'visible';
    introP1.style.color = '#FF3131';
    introH1.style.color = '#FFFFFF';
  }
})

window.addEventListener('scroll', () => {
  checkBoxes();
});

function resetProgressAnimation() {
  for (let i = 1; i <= 5; i++) {
    const bar = document.querySelector(`.inner-bar${i}`);
    if (bar) {
      bar.style.animation = 'none';
      void bar.offsetWidth;
      bar.style.animation = '';
    }
  }
}

function checkBoxes() {
  const triggerBottom = window.innerHeight * 1;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const boxBottom = box.getBoundingClientRect().bottom;
    
    if (boxTop < triggerBottom && boxBottom > 0) {
      if (!box.classList.contains('show') && box.classList.contains('myskill-sec')) {
        // Reset animation when myskill-sec enters viewport
        resetProgressAnimation();
      }
      box.classList.add('show');
    } else {
      if (box.classList.contains('show') && box.classList.contains('myskill-sec')) {
        // Reset animation state when myskill-sec leaves viewport
        const bars = box.querySelectorAll('[class^="inner-bar"]');
        bars.forEach(bar => {
          bar.style.width = '0';
        });
      }
      box.classList.remove('show');
    }
  });
}

document.getElementsByClassName('.work-img').addEventListener('click', function() {
  this.classList.add('animate-pulse');
  setTimeout(() => {
    this.classList.remove('animate-pulse');
  }, 5000); // Duration of the pulse animation
})

checkBoxes(); // Initial check to show boxes on page load