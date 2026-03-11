// ── SLIDESHOW BACKGROUND (semua halaman) ──
(function() {
  const photos = [
    'images/photo1.jpg','images/photo2.jpg','images/photo3.jpg',
    'images/photo4.jpg','images/photo5.jpg',
  ];
  const bg = document.getElementById('slideshowBg');
  if (!bg) return;

  const slides = photos.map(src => {
    const d = document.createElement('div');
    d.className = 'slide';
    d.style.backgroundImage = `url('${src}')`;
    bg.appendChild(d);
    return d;
  });

  let idx = 0;
  if (slides.length) {
    slides[0].classList.add('active');
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 5000);
  }
})();
