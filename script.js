// Your JS goes here
var divs = [];
var body = document.getElementsByTagName("body")[0];

for (var i = 0; i < 63; i++) {
  divs.push(document.createElement("div"));
  divs[i].style.width = "11.1%";
  divs[i].style.paddingBottom = "11.1%";
  divs[i].style.float = "left";
  if(i % 2 === 0) {
    divs[i].style.backgroundColor = "black";
  } else {
    divs[i].style.backgroundColor = "red";
  }
  body.appendChild(divs[i]);
}
