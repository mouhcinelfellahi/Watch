
function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("set-time");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("set-date");
    setDate.innerHTML =date.getDate()+" - "+parseInt(date.getMonth()+1) + " - " + date.getFullYear();  
}

setInterval(updateDate,100);

function getcolor(){
    
    var getcolor = document.getElementById("set-color").value;
    localStorage.setItem("color",getcolor);
    document.getElementById("time").style.background = localStorage.getItem("color");
    document.getElementById("body").style.background = localStorage.getItem("color");
}

setInterval(getcolor,1);