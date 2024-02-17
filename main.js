// felje

function clr_1(){
var clr = document.getElementById('display_js').value;
document.getElementById('display_js').value=clr.substring(0,clr.length-1);
}
function num(val){
var n = document.getElementById("display_js").value += val;
}
function clear_C(val){
 document.getElementById("display_js").value = val;
}
function equal(){
try{
clear_C(eval(document.getElementById("display_js").value));
 }
catch(equal){
  clear_C("Error!");
  setTimeout(function(){
  document.getElementById("display_js").value = '';
  },1100);
}
var a = document.getElementById("display_js");
a.value;
if (a.value == 'Infinity') {
 var error_msg_0 = document.getElementById("display_js");
error_msg_0.style.fontSize = "25px";
document.getElementById("display_js").value = "Can't Divide By 0!";
setTimeout(function(){
  document.getElementById("display_js").value = '';
var rtrn_font_size_1 = document.getElementById("display_js");
rtrn_font_size_1.style.fontSize = "40px";
  },1100);
  }
else if(a.value == 'undefined'){
var error_msg = document.getElementById("display_js");
  error_msg.style.fontSize = "25px";
document.getElementById("display_js").value = "Can't Equal To Empty!";
	setTimeout(function(){
document.getElementById("display_js").value = '';
  },1100);
	setTimeout(function(){
var rtrn_font_size_2 = document.getElementById("display_js");
rtrn_font_size_2.style.fontSize = "40px";
  },1100);
}
}
    
    /*
    var update_ans= setInterval(ans,0400);
    
    function ans(){
      var q = document.getElementById("");
    }
    */