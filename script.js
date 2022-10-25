'use stric'

let navs = Array.from(document.querySelectorAll('.nav-btn'));
let ind = Array.from(document.querySelectorAll('.content-cell-title-border-bottom'));
let pos = 1;
for(let i = 0; i < 4; i++){
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

let btn = Array.from(document.querySelectorAll('.nav-btn'));
let topArray = Array.from(document.querySelectorAll('.content-cell-title'));
console.log(topArray[1].getBoundingClientRect().top);
for( let i = 0; i < 4; i++ ){
	btn[i].addEventListener('click', () => {
		let path = topArray[i].getBoundingClientRect().top + window.pageYOffset - 100;
		window.scrollTo(0, path);
	});
}

document.addEventListener('scroll', () => {
	let coord = document.documentElement.getBoundingClientRect().top;
	if( window.pageYOffset >= 500 ){
		document.getElementById('opacity').style.opacity = 1;
  	} else if ( coord == 0 ){
  		document.getElementById('opacity').style.opacity = 0;
	}
})

