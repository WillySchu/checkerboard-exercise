// Your JS goes here
var divs = [];
var body = document.getElementsByTagName("body")[0];

function getRandColor() {
  var hex = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

for (var i = 0; i < 63; i++) {
  divs.push(document.createElement("div"));
  divs[i].style.width = "11.1%";
  divs[i].style.paddingBottom = "11.1%";
  divs[i].style.float = "left";
  divs[i].style.backgroundColor = getRandColor();
  body.appendChild(divs[i]);
}
