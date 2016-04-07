var nameArray = [];

for (var i = 1; i < 6; ++i) {
	nameArray[i] = prompt('Введите имя ' + (i) + ':', '');
}

var userName = prompt('Введите имя пользователя:', '');

var flag;

	for (var i = 0; i < nameArray.length; i++) {
		if (userName === nameArray[i]) {
        flag = true;
    }
  }
    if (flag == true) {
      alert(userName + ', вы успешно вошли!');
    } else  {
		    alert('Введенное имя пользователя не существует!');
		}
