// ── FLOATING HEARTS & PHOTOS ──
function createFloatingElements() {
  const container = document.querySelector('.hearts-bg');
  if (!container) return;

  const heartEmojis = ['❤️', '🌸', '💕', '✨', '💗', '🌷', '💖'];

  // Foto placeholder — ganti src dengan path foto asli kamu
  // Format: { src: 'images/foto1.jpg', label: 'optional' }
  const photos = [
    { src: 'images/photo1.jpg' },
    { src: 'images/photo2.jpg' },
    { src: 'images/photo3.jpg' },
    { src: 'images/photo4.jpg' },
  ];

  let activeCount = 0;
  const MAX = 18;

  function spawnHeart() {
    if (activeCount >= MAX) return;
    activeCount++;

    const el = document.createElement('span');
    el.classList.add('heart-float');
    el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    const dur = 7 + Math.random() * 7;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = '0s';
    container.appendChild(el);
    setTimeout(() => { el.remove(); activeCount--; }, dur * 1000);
  }

  function spawnPhoto() {
    if (activeCount >= MAX) return;
    activeCount++;

    const p = photos[Math.floor(Math.random() * photos.length)];
    const el = document.createElement('div');
    el.classList.add('photo-float');
    el.style.left = (5 + Math.random() * 85) + 'vw';
    const dur = 9 + Math.random() * 8;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = '0s';

    const img = document.createElement('img');
    img.src = p.src;
    img.alt = '';
    img.onerror = () => { el.remove(); activeCount--; }; // skip kalau foto belum ada
    el.appendChild(img);
    container.appendChild(el);
    setTimeout(() => { el.remove(); activeCount--; }, dur * 1000);
  }

  // Spawn campuran hati & foto
  spawnHeart();
  setInterval(() => {
    const r = Math.random();
    if (r < 0.65) spawnHeart();
    else spawnPhoto();
  }, 900);
}

// ── CONFETTI BURST ──
function confettiBurst() {
  const emojis = ['🎉', '🎊', '✨', '🌸', '💖', '🎂', '🥳', '💕'];
  const style = document.createElement('style');
  const rot = Math.round(Math.random() * 360);
  style.textContent = `@keyframes burstOut_${rot}{0%{transform:scale(.5) rotate(0deg);opacity:1}100%{transform:scale(2) rotate(${rot}deg) translateY(-60px);opacity:0}}`;
  document.head.appendChild(style);

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:${Math.random()*100}vh;font-size:${1+Math.random()*2}rem;pointer-events:none;z-index:9999;animation:burstOut_${rot} 1.5s ease forwards;`;
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 60);
  }
}

document.addEventListener('DOMContentLoaded', createFloatingElements);
