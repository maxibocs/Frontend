var obj = {
	div: document.createElement('div'),
	body: document.querySelector('body'),
	wrapper: document.querySelector('.wrapper'),
	h2: document.createElement('h2'),
	form: 0,

	wrapperCreate: function() {
		this.div.classList.add('wrapper');
		this.body.appendChild(this.div);
	},

	h2Create: function() {
		this.h2.innerHTML='Тест по программированию';
 		this.div.appendChild(this.h2);
	},

	formCreate: function() {
		this.form = document.createElement('form');
		this.div.appendChild(this.form);
	},

	buttonCreate:function(){
		var button = document.createElement('button');
		button.setAttribute('type', 'button')
		button.innerHTML='Проверить мои результаты';
		this.div.appendChild(button);
	},

	testCreate:function() {
		for (var i = 1; i < 4; i++){

			var question = document.createElement('h3');
			question.innerHTML= i +'. Вопрос №'+i;
			this.form.appendChild(question);

			for (var j = 1; j < 4; j++){


				var li =  document.createElement('li');
				this.form.appendChild(li);

				var label = document.createElement('label');
				li.appendChild(label);

				var checkbox = document.createElement('input');
				var span = document.createElement('span');

				li.style.listStyleType='none';
				checkbox.setAttribute('type','checkbox');
				span.innerHTML= 'Вариант ответа №'+j;
				label.appendChild(checkbox);
				label.appendChild(span);
			}
		}
	this.buttonCreate();
	},

	allCreate:function(){
		this.wrapperCreate();
		this.h2Create();
		this.formCreate();
		this.testCreate();
	}
};

obj.allCreate();
