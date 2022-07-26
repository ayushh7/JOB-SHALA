
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

output.innerHTML = slider.value; 
console.log(slider.value);

slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(this.value);
}
