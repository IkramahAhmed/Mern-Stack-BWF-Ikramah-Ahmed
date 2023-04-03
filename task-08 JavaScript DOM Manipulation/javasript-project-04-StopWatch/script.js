



    /* <!--   Project-4  Stop Watch--> */

    var hr=0;
    var min=0;
    var sec=0;
var count=0;//second ka one hundred part he iskay bad 1 second hoga jab yeah 100 dafa chlay ga to ek second hoga
var timer =false;   //yeah yeh decide karay ga kay hamara timer  chl raha he ya ruka howa he 

function start(){
  var timer =true;  
  stopWatch();
    }
 function stop(){
  var timer =false ;  
    }
    
    function reset(){
      var timer =false ;  
      var hr=0;
      var min=0;
      var sec=0;
      var a= document.getElementById("hr").innerHTML ="00" ;
      var b= document.getElementById("min").innerHTML ="00" ;
      var c= document.getElementById("sec").innerHTML ="00" ;
      var d= document.getElementById("count").innerHTML ="00"; 



    }

function stopWatch(){
  if(timer == true){
count=count+1;

if(count == 100){
  sec =sec+1;
  count=0;
}
if(sec ==60){
  min =min+1;
  sec=0;
}
if(min ==60){
  hr =hr+1;
  count=0;
  min=0;
  sec=0;
}
// zero before less than 10
var hrString =hr;
var minString =min;
var secString =sec;
var countString =count;

if(count >10 ){
  countString = "0" +countString
}
if(hr >10 ){
  hrString = "0" +hrString
  }
  if(min >10 ){
    minString = "0" +minString
    }
    if(count >10 ){
      secString = "0" +secString
      }
if(count)
document.getElementById("count").innerHTML=countString;
document.getElementById("hr").innerHTML=hrString;
document.getElementById("min").innerHTML=minString;
document.getElementById("sec").innerHTML=secString;

start

    setTimeout("stopWatch()",10)
  }
}