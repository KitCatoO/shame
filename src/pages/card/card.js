document.addEventListener('DOMContentLoaded', function () {
  const selectAll = document.getElementById('selectAll');
  const deleteAllWrapper = document.getElementById('deleteAllWrapper');
  const deleteAllBtn = deleteAllWrapper.querySelector('button');
  const itemCount = document.getElementById('itemCount');

  function getItemCheckboxes() {
    return document.querySelectorAll('.item-checkbox');
  }

  function updateDeleteButton() {
    const anyChecked = [...getItemCheckboxes()].some(cb => cb.checked);
    deleteAllWrapper.style.display = anyChecked ? 'block' : 'none';
  }

  function updateSelectAllCheckbox() {
    const checkboxes = getItemCheckboxes();
    const allChecked = [...checkboxes].length && [...checkboxes].every(cb => cb.checked);
    selectAll.checked = allChecked;
  }

  function updateItemCount() {
    const count = getItemCheckboxes().length;
    const label = count === 1 ? 'товар' : (count < 5 ? 'товара' : 'товаров');
    itemCount.textContent = `${count} ${label}`;
  }

  selectAll.addEventListener('change', function () {
    getItemCheckboxes().forEach(cb => cb.checked = selectAll.checked);
    updateDeleteButton();
  });

  document.addEventListener('change', function (e) {
    if (e.target.classList.contains('item-checkbox')) {
      updateSelectAllCheckbox();
      updateDeleteButton();
    }
  });

  deleteAllBtn.addEventListener('click', () => {
    getItemCheckboxes().forEach(cb => {
      if (cb.checked) {
        const itemRow = cb.closest('.d-flex');
        itemRow?.remove();
      }
    });

    updateDeleteButton();
    updateSelectAllCheckbox();
    updateItemCount();
  });

  // Инициализация
  updateItemCount();
});
