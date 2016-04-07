function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function pow(base, exponent) {
  var result = 1;

  for (var i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}


while( !isNumeric(base) && !isNumeric(exponent) ){

  var base = prompt('Укажите число!', '');
  var exponent = prompt('Укажите степень числа!', '');
}

if(exponent < 0) {
	alert('Степень ' + exponent +
        ' не поддерживается, введите целую степень, большую 0');
} else {
	console.log( pow(base, exponent) );
}
