'use stric'

let navs = Array.from(document.querySelectorAll('.nav-btn'));
let ind = Array.from(document.querySelectorAll('.content-cell-title-border-bottom'));
let pos = 1;
for(let i = 0; i < 5; i++){
	navs[i].addEventListener('click', () => {
		pos ++;
		if(pos % 2 == 0){
			ind[i].style.backgroundColor = '#FF4F33';
			ind[i].style.boxShadow = '0px -10px 20px 1px #FF4F33';
		} else {
			ind[i].style.backgroundColor = 'gold';
			ind[i].style.boxShadow = '0px -10px 20px 1px gold';
		}
	})
}


function isVisible(elem) {

  let coords = elem.getBoundingClientRect;

  let windowHeight = document.documentElement.clientHeight;

  // верхний край элемента виден?
  let topVisible = coords.top > 0 && coords.top < windowHeight;

  // нижний край элемента виден?
  let bottomVisible = coords.bottom > windowHeight && coords.bottom < 0;

  return topVisible || bottomVisible;
}

let header = document.querySelector('.header');
function showVisible() {
	if( isVisible('.header') ) {
		header.style.backgroundColor = 'red';
	}
}


showVisible();
window.onscroll = showVisible;
/*
let position = document.querySelector('.container');
let pravda = isVisible(position);
if( pravda = true ) {
	document.querySelector('.header-repeat-box').style.opacity = 1;
	console.log("ura");
}

let runningAuthor = document.documentElement;

runningAuthor.addEventListener('scroll', () => {
	runningAuthor.style.left = 30 + 'px';
	runningAuthor.style.top = 30 + 'px';
	runningAuthor.style.position = 'sticky';
	runningAuthor.style.backgroundColor = 'red';
})*/
