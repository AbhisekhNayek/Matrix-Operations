function parseMatrix(input) {
    // Parse textarea input into a 2D array representing a matrix
    return input.trim().split('\n').map(row => row.split(/\s+/).map(Number));
  }
  
  function formatMatrix(matrix) {
    // Format a 2D array into a string for display
    return matrix.map(row => row.join('\t')).join('\n');
  }
  
  function addMatrices() {
    var matrix1 = parseMatrix(document.getElementById('matrix1').value);
    var matrix2 = parseMatrix(document.getElementById('matrix2').value);
    
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
      document.getElementById('result').innerText = 'Matrices must have the same dimensions for addition.';
      return;
    }
  
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
      var newRow = [];
      for (var j = 0; j < matrix1[0].length; j++) {
        newRow.push(matrix1[i][j] + matrix2[i][j]);
      }
      result.push(newRow);
    }
  
    document.getElementById('result').innerText = 'Result:\n' + formatMatrix(result);
  }
  
  function subtractMatrices() {
    var matrix1 = parseMatrix(document.getElementById('matrix1').value);
    var matrix2 = parseMatrix(document.getElementById('matrix2').value);
    
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
      document.getElementById('result').innerText = 'Matrices must have the same dimensions for subtraction.';
      return;
    }
  
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
      var newRow = [];
      for (var j = 0; j < matrix1[0].length; j++) {
        newRow.push(matrix1[i][j] - matrix2[i][j]);
      }
      result.push(newRow);
    }
  
    document.getElementById('result').innerText = 'Result:\n' + formatMatrix(result);
  }
  
  function multiplyMatrices() {
    var matrix1 = parseMatrix(document.getElementById('matrix1').value);
    var matrix2 = parseMatrix(document.getElementById('matrix2').value);
    
    if (matrix1[0].length !== matrix2.length) {
      document.getElementById('result').innerText = 'Number of columns in Matrix 1 must match number of rows in Matrix 2 for multiplication.';
      return;
    }
  
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
      var newRow = [];
      for (var j = 0; j < matrix2[0].length; j++) {
        var sum = 0;
        for (var k = 0; k < matrix1[0].length; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        newRow.push(sum);
      }
      result.push(newRow);
    }
  
    document.getElementById('result').innerText = 'Result:\n' + formatMatrix(result);
  }
  
  function scalarMultiplication() {
    var matrix = parseMatrix(document.getElementById('matrix1').value);
    var scalar = parseFloat(document.getElementById('scalar').value);
    
    var result = [];
    for (var i = 0; i < matrix.length; i++) {
      var newRow = [];
      for (var j = 0; j < matrix[0].length; j++) {
        newRow.push(matrix[i][j] * scalar);
      }
      result.push(newRow);
    }
  
    document.getElementById('result').innerText = 'Result:\n' + formatMatrix(result);
  }
  
  function transposeMatrix() {
    var matrix = parseMatrix(document.getElementById('matrix1').value);
    
    var result = [];
    for (var j = 0; j < matrix[0].length; j++) {
      var newRow = [];
      for (var i = 0; i < matrix.length; i++) {
        newRow.push(matrix[i][j]);
      }
      result.push(newRow);
    }
  
    document.getElementById('result').innerText = 'Result:\n' + formatMatrix(result);
  }
  
  function inverseMatrix() {
    var matrix = parseMatrix(document.getElementById('matrix1').value);
    
    // Check if matrix is square
    if (matrix.length !== matrix[0].length) {
      document.getElementById('result').innerText = 'Matrix must be square for inversion.';
      return;
    }
    
    document.getElementById('result').innerText = 'Matrix inversion is not implemented in this version.';
  }

  function performOperation() {
    var operation = document.getElementById('operation').value;
    switch (operation) {
      case 'add':
        addMatrices();
        break;
      case 'subtract':
        subtractMatrices();
        break;
      case 'multiply':
        multiplyMatrices();
        break;
      case 'scalarMultiply':
        scalarMultiplication();
        break;
      case 'transpose':
        transposeMatrix();
        break;
      case 'inverse':
        inverseMatrix();
        break;
      default:
        document.getElementById('result').innerText = 'Invalid operation selected.';
    }
  }
  
  