// Your JS goes here
var divs = [];
var body = document.getElementsByTagName("body")[0];
var color = [];

function getRandColor() {
  var hex = "123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    if(i % 2 === 0){
      color += hex[Math.floor(Math.random() * 8)]
    }else {
      color += 1;
    }
  }
  return color;
}

function grade(color) {
  var newcolor = color.slice(1);
  newcolor = (parseInt(newcolor, 16) + 0x020202).toString(16);
  newcolor = "#" + newcolor;
  return newcolor;
}

for (var i = 0; i < 63; i++) {
  divs.push(document.createElement("div"));
  divs[i].style.width = "11.1%";
  divs[i].style.paddingBottom = "11.1%";
  divs[i].style.float = "left";
  if(i < 2){
    color[i] = getRandColor();
  } else {
    color[i % 2] = grade(color[i % 2]);
  }
  console.log(color[i%2]);
  divs[i].style.backgroundColor = color[i % 2];
  body.appendChild(divs[i]);
}
