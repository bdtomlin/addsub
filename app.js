(function(){
  addButton = document.getElementById("add");
  subtractButton = document.getElementById("subtract");
  xbox = document.getElementById("x");
  ybox = document.getElementById("y");
  result = document.getElementById("result");
  errorMessage = document.getElementById("error-message");

  var validateInputs = function(x,y){
    if(isNaN(x) || isNaN(y)) {
      errorMessage.style.display = "block";
      result.innerHTML = '';
      return false;
    } else {
      xbox.value = x;
      ybox.value = y;
      errorMessage.style.display = "none";
      return true;
    }
  };

  addButton.onclick = function(){
    var x = parseInt(xbox.value);
    var y = parseInt(ybox.value);

    if(validateInputs(x,y)){
      sum = x + y;
      result.innerHTML = x + ' + ' + y + ' = ' + sum;
    }
  };

  subtractButton.onclick = function(){
    var x = parseInt(xbox.value);
    var y = parseInt(ybox.value);

    if(validateInputs(x,y)){
      diff = x - y;
      result.innerHTML = x + ' - ' + y + ' = ' + diff;
    }
  };
})();
