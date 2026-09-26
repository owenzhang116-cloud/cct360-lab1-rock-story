// The rock moves slightly within its section as the page scrolls.
const scenes = document.querySelectorAll('.scene');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateStory() {
  scenes.forEach(function (scene) {
    const position = scene.getBoundingClientRect();
    const story = scene.querySelector('.story');
    const rock = scene.querySelector('.rock');

    // Reveal the text when this section enters the screen.
    if (position.top < window.innerHeight * 0.8) {
      story.classList.add('visible');
    }

    // Moving the rock at a different speed creates a small parallax effect.
    const distance = (window.innerHeight / 2 - position.top - position.height / 2) * 0.12;
    const movement = Math.max(-55, Math.min(55, distance));
    rock.style.transform = reduceMotion.matches ? 'none' : 'translateY(' + movement + 'px)';
  });
}

document.body.classList.add('animate');
window.addEventListener('scroll', updateStory, { passive: true });
window.addEventListener('resize', updateStory);
reduceMotion.addEventListener('change', updateStory);
updateStory();

