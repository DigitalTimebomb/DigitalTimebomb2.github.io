
function MyTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

}

function Hello(){
    var VisitorName = prompt( "Hey man!, What is your name?");
    document.write("<h1>" + "Welcome " + VisitorName + "!" + "</h1>"); 
}

function MyLog(){
  console.log("Tom's Test log");
}