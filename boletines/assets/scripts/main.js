//DOM
//querySelector / querySelectorAll
/*
let links = document.querySelectorAll("a");
links.forEach(function(link) {
console.log(link)
});


let celdas = document.querySelectorAll("td");
celdas.forEach(function(td) {
	td.addEventListener("click", function() {
		console.log(this);
	});
});
*/

let links = document.querySelectorAll(".close");
links.forEach(function(link) {
	link.addEventListener("click", function(evento) {
		evento.preventDefault();
		let content = document.querySelector(".content");
		if (content.classList.contains("animsUp")) {
			content.classList.remove("animsUp")
			content.classList.add("animsDown")
			console.log("Arriba")
		} else {
			content.classList.remove("animsUp")
			content.classList.add("animsUp")
			console.log("Abajo")
			
		}
		setTimeout(function() {
			location.href="/";
		},100);

		return false;
	});
});
