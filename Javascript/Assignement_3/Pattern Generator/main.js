const btn = document.getElementById('btn');                     //returns the element that has the ID attribute with the specified value.
const frame = document.getElementById('frame');                 
const width = frame.clientWidth;                               //returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin.
const height = frame.clientHeight;
const margin = window.innerHeight - height;                    //returns the height of a window's content area.
console.log(height, width, margin);
btn.onclick = function(e) {
	var newCircle = document.createElement('div');             //creates an Element Node with the specified name.
	newCircle.classList.add('circle');                              //The classList property returns the class name(s) of an element, as a DOMTokenList object. 	This property is useful to add, remove and toggle CSS classes on an element.
	newCircle.style.top = margin + Math.random() * height + 'px';
	newCircle.style.left = Math.random() * width + 'px';
	frame.appendChild(newCircle);
};