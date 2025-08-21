var today = new Date
var countdate=today.setDate(today.getDate()+2);
var x = setInterval(function(){
    var now=new Date().getTime();
    var distance =countdate- now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Days").innerHTML=days
    document.getElementById("Hours").innerHTML=hours
    document.getElementById("Minutes").innerHTML=minutes
    document.getElementById("Seconds").innerHTML=seconds
    if (distance=0){

        
    document.getElementById("Days").innerHTML=0
    document.getElementById("Hours").innerHTML=0
    document.getElementById("Minutes").innerHTML=0
    document.getElementById("Seconds").innerHTML=0
    }

},1000)
    