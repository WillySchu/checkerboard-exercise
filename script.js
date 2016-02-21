// Your JS goes here
var divs = [];
var body = document.getElementsByTagName("body")[0];
var color = [];
var interval;

function getRandColor() {
  var hex = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

function grade(color) {
  var newcolor = color.slice(1);
  newcolor = (parseInt(newcolor, 16) + 0x020202).toString(16);
  newcolor = "#" + newcolor;
  return newcolor;
}

function flash() {
  for (var i = 0; i < 63; i++) {
    divs[i].style.backgroundColor = getRandColor();
  }
}

for (var i = 0; i < 63; i++) {
  divs.push(document.createElement("div"));
  divs[i].style.width = "11.1%";
  divs[i].style.paddingBottom = "11.1%";
  divs[i].style.float = "left";
  divs[i].style.backgroundColor = getRandColor();
  body.appendChild(divs[i]);
}

function Loop(){
  interval = setInterval(flash, 2000);
}

var audio = document.createElement("audio");
audio.src = "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga";
audio.setAttribute("autoplay", "");
body.appendChild(audio);

Loop();
