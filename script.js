var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("li");
const liss = document.getElementsByTagName("li")
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

let mylist = document.getElementsByTagName("li");
for(let i = 0; i < mylist.length ; i++){
	let span = document.createElement("button");
	span.innerText = "Delete";
	span.className = "butt";
	span.appendChild(document.createTextNode(span.value));
	mylist[i].appendChild(span);

	let butt = document.getElementsByClassName("butt");
	for (let i =0; i < butt.length; i++){
		butt[i].onclick = function(){
			let rem = this.parentElement
			rem.style.display = "none";
			
		};
	}
}
	
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	let span = document.createElement("button");
	span.innerText = "Delete";
	span.className = "butt";
	span.appendChild(document.createTextNode(span.value));
	ul.appendChild(span);

	let butt = document.getElementsByClassName("butt");
	for (let i =0; i < butt.length; i++){
		butt[i].onclick = function(){
			let rem = this.parentElement
			rem.style.display = "none";
			
		};
	}
}
let listline = document.getElementsByTagName("li");
	for (let i =0; i < listline.length; i++){
		listline[i].addEventListener("click", function(e){

		e.target.classList.toggle("done");

		});

		
	}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
		

	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("click", addListAfterKeypress);




