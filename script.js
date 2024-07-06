let the_Input = document.querySelector("input");
const the_Button = document.querySelector("button");
var the_paragraph = document.querySelector("p");

the_Button.onclick = function () {
  the_Value = the_Input.value;
  the_paragraph.innerHTML = the_Value;
};
