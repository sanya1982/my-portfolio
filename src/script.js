"use strict";

const btn = document.querySelector('.btn'),
	about = document.querySelector('.about'),
	aboutTitle = about.querySelector('.about__title'),
	aboutText = about.querySelector('.about__text'),
	servicesItemsLi = about.querySelectorAll('.services__items-li'),
	servicesItemSubtitle = about.querySelector('.services__item-subtitle'),
	servicesText = about.querySelector('.services__text');
console.log(servicesText);

btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('yes');
	about.classList.toggle('black');
	aboutTitle.classList.toggle('black');
	aboutText.classList.toggle('black');
	servicesItemSubtitle.classList.toggle('black');
	servicesText.classList.toggle('black');
	servicesItemsLi.forEach(element => {
		element.classList.toggle('black');
	});
});