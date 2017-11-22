var root = document.getElementById("root");
var ul = document.createElement("ul");
var li = document.createElement("li");
li.appendChild(document.createTextNode("Сделать задание #3 по web-программированию"));
var button = document.createElement("button");
button.appendChild(document.createTextNode("Delete"));
li.appendChild(button);

var input = document.createElement("input");
input.setAttribute("id", "add_task_input");
var addbutton = document.createElement("button");
addbutton.setAttribute("id", "add_task");
addbutton.appendChild(document.createTextNode("Add"));

addbutton.addEventListener('click', function(){
	
	var newli = document.createElement("li");
	newli.appendChild(document.createTextNode(input.value));
	var newbutton = document.createElement("button");	
	newbutton.appendChild(document.createTextNode("Delete"));
	newbutton.addEventListener('click', function(){
		ul.removeChild(newli);
	});

	newli.appendChild(newbutton);
	ul.appendChild(newli);	
});

button.addEventListener('click', function(){
	ul.removeChild(li);
});

ul.appendChild(li);


root.appendChild(ul);
root.appendChild(input);
root.appendChild(addbutton);

