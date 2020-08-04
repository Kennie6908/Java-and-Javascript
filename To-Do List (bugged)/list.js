var close = document.getElementsByClassName("close");
let todoitems = []; 

const getLocalStorage = function(){

    const todoStorage = localStorage.getItem('todoitems');
    if (todoStorage === 'undefined' || todoStorage === null){
        todoitems = [];
    } 
	else {
		todoitems = JSON.parse(todoStorage);
        for (var i = 0; i < todoitems.length; i++){
			 var li = document.createElement("li");
			 var textnode = document.createTextNode(todoitems[i]);
			 li.appendChild(textnode);
			 
			 document.getElementById("itemslist").appendChild(li);
			
			  var span = document.createElement("span");
  				var xsign = document.createTextNode("\u00D7");
  				span.className = "close";
  				span.appendChild(xsign);
  				li.appendChild(span);

				deleteitems();
		}
    }
}

getLocalStorage();

const setLocalStorage = function(todoItems){
    localStorage.setItem('todoitems', JSON.stringify(todoItems));
}

function deleteitems () {
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}

deleteitems();

var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});

function newElement() {
  var li = document.createElement("li");
  var userinput = document.getElementById("inputbox").value;
  var textnode = document.createTextNode(userinput);
  li.appendChild(textnode);

  if (userinput === '') {
	alert("No blank responses. Do something!");
  } 
  else {
	document.getElementById("itemslist").appendChild(li);
    todoitems.push(textnode.wholeText);
	setLocalStorage(todoitems);
  }
  console.log(todoitems);

  document.getElementById("inputbox").value = "";

  var span = document.createElement("span");
  var xsign = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(xsign);
  li.appendChild(span);

  deleteitems();
}

function clearEverything() {
	localStorage.clear();
	var alllistitems = document.getElementsByTagName("li");
	for (var i = 0; i < alllistitems.length; i++) {
		alllistitems[i].style.display = "none";
	}
}




