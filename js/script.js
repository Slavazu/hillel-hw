function createTable() {
  const tableContainer = document.createElement('div');
  const table = document.createElement('table');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement('tr');

    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement('td');
      const cellValue = i * 10 + j + 1;
      cell.textContent = cellValue;
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }

  table.appendChild(fragment);
  tableContainer.appendChild(table);
  document.body.appendChild(tableContainer);
}

createTable();
