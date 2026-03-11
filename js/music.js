// ── MUSIK PERSISTENSI ANTAR HALAMAN ──
// Taruh script ini di semua halaman kecuali index.html
(function() {
  const music = document.getElementById('bgMusic');
  const btn   = document.getElementById('musicBtn');
  if (!music || !btn) return;

  music.volume = 0.45;

  // Lanjutkan dari halaman sebelumnya
  if (sessionStorage.getItem('musicPlaying') === '1') {
    music.play().then(() => {
      btn.classList.add('show');
      btn.textContent = '🔊';
    }).catch(() => {
      btn.classList.add('show');
      btn.textContent = '🔇';
    });
  } else {
    btn.classList.add('show');
  }

  btn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      btn.textContent = '🔊';
      sessionStorage.setItem('musicPlaying', '1');
    } else {
      music.pause();
      btn.textContent = '🔇';
      sessionStorage.setItem('musicPlaying', '0');
    }
  });

  music.addEventListener('play',  () => sessionStorage.setItem('musicPlaying', '1'));
  music.addEventListener('pause', () => sessionStorage.setItem('musicPlaying', '0'));
})();
