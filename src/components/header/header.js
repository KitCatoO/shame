document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("catalogToggle");
  const panel = document.querySelector(".catalog-offcanvas");
  const toggleLabel = document.querySelector("label[for='catalogToggle']");

  document.addEventListener("mousedown", function (e) {
    const isPanelClick = panel.contains(e.target);
    const isLabelClick = toggleLabel.contains(e.target);

    console.log('ll', isPanelClick)

    if (!isPanelClick && !isLabelClick) {
      toggle.checked = false;
    }
  });
});
