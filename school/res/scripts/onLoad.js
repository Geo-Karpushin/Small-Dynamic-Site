const leavesCount = Math.round(getRandomArbitrary(200, 250));
const timeSpread = 15;
const sizeSpread = 0.5;
const leftSpread = 100;
const topSpread = 100;
const maxBallsCount = Math.round(getRandomArbitrary(4, 10));
const balls = 5;

window.onload = function(){
	const bodyDOM = document.getElementsByTagName("body")[0];

	for (let i = 0; i <= leavesCount; i++) {
		let tdelay=getRandomArbitrary(3, timeSpread);
		let tsize=getRandomArbitrary(0.1, sizeSpread);
		let tleft=Math.round(getRandomArbitrary(0,leftSpread));
		let ttop=Math.round(getRandomArbitrary(0,topSpread));
		bodyDOM.innerHTML+=`<div class='snow' style="animation: snowfall `+tdelay+`s linear infinite; --size: `+tsize+`vw; left:`+tleft+`%; top:`+ttop+`%;"></div>`;
	}
	
	loadProducts();
	loadToys();
}

function loadProducts(){
	const PC = document.getElementById("products-container");
	const main = document.getElementById("main");
	let products = readTextFile("../../products/settings.txt");
	if(products.length==1){
		main.style.justifyContent = "center";
	}
	for(let i=0; i<products.length; i++){
		PC.innerHTML+="<div class='product'><img class='product-img' src='../../products/"+products[i]+"/photo.png'><p class='product-text'>"+getGoodString(readTextFile("../../products/"+products[i]+"/desc.txt"))+"</p></div>";
	}
}

function loadToys(){
	const bodyDOM = document.getElementById("balls");
	let k = maxBallsCount+2;
	let lefts = [];
	let tops = [];
	for(let i=1; i<=maxBallsCount; i++){
		let ttop=Math.round(getRandomArbitrary(0,topSpread));
		let ballId=Math.round(getRandomArbitrary(1,balls));
		bodyDOM.innerHTML+=`<img src='res/img/toys/ball`+ballId+`.svg'; class='ball'; style='z-index: `+(i-k)+`;transform: translate3d(0, `+ttop+`vh, 0)';">`;
	}
}

function getGoodString(str){
	let ret = "";
	for(let i=0; i<((str.length)-1); i++){
		ret+=str[i]+'</p><p class="product-text">';
	}
	if(ret == ""){
		ret=str[0];
	}
	return ret;
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	var allStrings;
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				allStrings = rawFile.responseText.split('\n');
			}
		}
	}
	rawFile.send(null);
	return allStrings;
}