document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.waifu-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function createEdgeStars() {
  const totalStars = 12;
  for (let i = 0; i < totalStars; i++) {
    const starLeft = document.createElement('div');
    starLeft.classList.add('edge-star');
    starLeft.style.left = '10px';
    starLeft.style.top = `${i * 8 + 5}%`;

    const starRight = document.createElement('div');
    starRight.classList.add('edge-star');
    starRight.style.right = '10px';
    starRight.style.top = `${i * 8 + 5}%`;

    document.body.appendChild(starLeft);
    document.body.appendChild(starRight);
  }
}

createEdgeStars();
