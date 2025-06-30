document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("catalogToggle");
  const panel = document.querySelector(".catalog-offcanvas");
  const toggleLabel = document.querySelector("label[for='catalogToggle']");

  document.addEventListener("mousedown", function (e) {
    const isPanelClick = panel.contains(e.target);
    const isLabelClick = toggleLabel.contains(e.target);

    if (!isPanelClick && !isLabelClick) {
      toggle.checked = false;
    }
  });

  const burger = document.querySelector('.burger');
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const threshold = 100;

  window.addEventListener('scroll', () => {
    const isOpen = burger.classList.contains('open');
    if (window.scrollY > threshold && !isOpen && mediaQuery.matches) {
      burger.classList.add('fixed-top-left');
    } else {
      burger.classList.remove('fixed-top-left');
    }
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    if (burger.classList.contains('open')) {
      burger.classList.remove('fixed-top-left');
    }
  });
});
