// Бургер меню + появляющийся header при скролле
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function (event) {
		$('.header__link, .header__burger, .header__nav').removeClass('active');
		$('body').removeClass('lock');
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.header').addClass('fixed');
			$('.header__contacts').addClass('del');
		}
		else if ($(this).scrollTop() < 150) {
			$('.header').removeClass('fixed');
		}
	});
});

// Исчезающий offer
let offer = document.querySelector('.intro__offer');
let close = document.querySelector('.intro__offer-close');
let open = document.querySelector('.intro__offer-click');

close.addEventListener('click', function () {
	offer.classList.add('close');
});

open.addEventListener('click', function () {
	offer.classList.add('open');
});

// Вывод решения проблемы
let decisionOpens = document.querySelectorAll('.problems__list-button');
let problemsOpen = document.querySelector('.decision__subtitle');
let problemsBody = document.querySelector('.problems__body');
let decisionBody = document.querySelector('.decision__body');

// Slider Swiper
new Swiper('.swiper-team', {
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
	spaceBetween: 30,
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		780: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		}
	},
});
new Swiper('.swiper-reviews', {
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
	spaceBetween: 30,
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1000: {
			slidesPerView: 2,
		}
	},
});



for (let i = 0; i < decisionOpens.length; i++) {
	decisionOpens[i].addEventListener('click', function () {
		decisionBody.classList.add('block');
	});
};
for (let i = 0; i < decisionOpens.length; i++) {
	decisionOpens[i].addEventListener('click', function () {
		problemsBody.classList.add('block');
	});
};

problemsOpen.addEventListener('click', function () {
	decisionBody.classList.remove('block');
	problemsBody.classList.remove('block');
});

// Выпадающий ответ
let questions = document.getElementsByClassName('questions__click');
let questionsImg = document.getElementsByClassName('questions__img');

for (let i = 0; i < questions.length; i++) {
	questions[i].addEventListener('click', function () {
		for (let j = 0; j < questionsImg.length; j++) {
			questionsImg[i].classList.toggle('active');
		}
		this.classList.toggle('active');
		let answer = this.nextElementSibling;
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
		} else {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		}
	})
}

// Анимация при скролле
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {

	window.addEventListener('scroll', animonScroll);

	function animonScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animonScroll();
	}, 300);
};




const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// Получить форму из модального окна
var form = document.querySelector('form');

// При отправке формы
form.onsubmit = function (event) {
	// Получить значение поля для номера телефона
	var phoneInput = document.getElementById('phone').value;
	// Проверить, состоит ли введенное значение только из цифр
	if (!/^\d+$/.test(phoneInput)) {
		// Если нет, предотвратить отправку формы и вывести сообщение об ошибке
		event.preventDefault();
		alert('Пожалуйста, введите только цифры в поле для номера телефона.');
	}
};

// Получить модальное окно
var modal = document.querySelector('.modal');

// Получить кнопку, которая открывает модальное окно
var btn = document.querySelector('.intro__button');

// Получить элемент <span>, который закрывает модальное окно
var closeBtn = document.querySelector('.close');

// Когда пользователь нажимает на кнопку, открыть модальное окно
btn.onclick = function () {
	modal.style.display = 'block';
}

// Когда пользователь нажимает на <span> (x), закрыть модальное окно
closeBtn.onclick = function () {
	modal.style.display = 'none';
}

// Когда пользователь щелкает за пределами модального окна, закрыть его
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}
