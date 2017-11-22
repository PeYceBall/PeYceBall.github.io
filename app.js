var root = document.getElementById("root");
var ul = document.createElement("ul");
var li = document.createElement("li");
li.appendChild(document.createElement("span").appendChild(document.createTextNode("Сделать задание #3 по web-программированию")));
var button = document.createElement("button");
button.appendChild(document.createTextNode("Удалить"));
button.addEventListener('click', function(){
	ul.removeChild(li);
});



// var input = document.createElement("input");
// input.setAttribute("id", "add_task_input");
// var addbutton = document.createElement("button");
// addbutton.setAttribute("id", "add_task");
// addbutton.appendChild(document.createTextNode("Add"));

// addbutton.addEventListener('click', function(){
	
// 	var newli = document.createElement("li");
// 	newli.appendChild(document.createElement("span").appendChild(document.createTextNode(input.value)));
// 	var newbutton = document.createElement("button");	
// 	newbutton.appendChild(document.createTextNode("Удалить"));
// 	newbutton.addEventListener('click', function(){
// 		ul.removeChild(newli);
// 	});

// 	newli.appendChild(newbutton);
// 	ul.appendChild(newli);	
// });

li.appendChild(button);
ul.appendChild(li);
root.appendChild(ul);
root.appendChild(input);
root.appendChild(addbutton);

 
