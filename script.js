// Fade in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const waifu = document.querySelector('.waifu-img');
  const text = document.querySelector('.waifu-text');

  const revealOnScroll = () => {
    const scrollY = window.scrollY + window.innerHeight;
    const waifuOffset = waifu.offsetTop;

    if (scrollY > waifuOffset + 100) {
      waifu.classList.add('visible');
      text.classList.add('visible');
    }
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
