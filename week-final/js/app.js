lucide.createIcons();

const wheel = document.getElementById('iPodWheel');
const slider = document.getElementById('albumSlider');

if (wheel && slider) {
  const albums = Array.from(slider.querySelectorAll('img'));
  const total = albums.length;
  let currentIndex = 0;
  let lastAngle = null;
  let accumulated = 0;
  const threshold = 35;

  function updateCarousel() {
    albums.forEach((img, i) => {
      const offset = i - currentIndex;
      const absOffset = Math.abs(offset);

      if (absOffset > 2) {
        img.style.opacity = '0';
        img.style.pointerEvents = 'none';
        return;
      }

      const translateX = offset * 55;
      const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.7 : 0.5;
      const translateZ = absOffset === 0 ? 0 : absOffset === 1 ? -40 : -80;
      const zIndex = 10 - absOffset;
      const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.7 : 0.4;

      img.style.transform = `translateX(${translateX}%) scale(${scale}) translateZ(${translateZ}px)`;
      img.style.zIndex = zIndex;
      img.style.opacity = opacity;
      img.style.pointerEvents = 'auto';
    });
  }

  updateCarousel();

  wheel.addEventListener('mousemove', (e) => {
    const rect = wheel.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

    if (lastAngle !== null) {
      let delta = angle - lastAngle;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      accumulated += delta;

      if (accumulated > threshold) {
        currentIndex = Math.min(currentIndex + 1, total - 1);
        accumulated = 0;
        updateCarousel();
      } else if (accumulated < -threshold) {
        currentIndex = Math.max(currentIndex - 1, 0);
        accumulated = 0;
        updateCarousel();
      }
    }

    lastAngle = angle;
  });

  wheel.addEventListener('mouseleave', () => {
    lastAngle = null;
    accumulated = 0;
  });
}

const ipodImg = document.querySelector('.ipod-wrapper');

function playShake() {
  ipodImg.classList.add('animate__animated', 'animate__headShake');
  ipodImg.addEventListener('animationend', () => {
    ipodImg.classList.remove('animate__animated', 'animate__headShake');
  }, { once: true });
}

// 페이지 로드 후 
setTimeout(playShake, 1500);

// 이후 8초마다 반복
setInterval(playShake, 8000);

// 휠 조작 중 애니메이션 제거
if (wheel) {
  wheel.addEventListener('mousemove', () => {
    ipodImg.classList.remove('animate__animated', 'animate__headShake');
  });
}

AOS.init({
  duration: 900,
  once: true
});