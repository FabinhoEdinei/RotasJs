var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 
'Agora sim , escrevendo no meu diario...' + y[0].innerHTML;
function myFunction() {
  var x = document.forms["frm1"];
  var text = "ola então, hoje eu fiz um botão que joga esse texto na tela mas num paragrafo e tals e postei no github, e testei o codigo fonte . ";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}