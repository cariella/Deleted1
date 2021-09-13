let color = document.getElementById('colorPicker');
let gridHeight = document.getElementById('inputHeight').value;
let gridWidth = document.getElementById('inputWidth').value;
let size = document.getElementById('sizePicker');

size.addEventListener('submit', function(event)
  {userGrid.innerHTML = ""
  event.preventDefault();
  let gridHeight = document.getElementById('inputHeight').value;
  let gridtWidth = document.getElementById('inputWidth').value;
  makeGrid(gridHeight, gridWidth);});

document.getElementById('#colorPicker').addEventListener('click')

function makeGrid(gridHeight, gridWidth)
  {for (y = 0; y < gridHeight - 1; y++)
      {var row = table.insertRow(y);
      for (x = 0; x < gridWidth; x++)
        {var cell = row.insertCell(y);}}
        userGrid.addEventListener('click', function(event)
          {var color = document.getElementById('#colorPicker').value;})}}
