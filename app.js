

      
        setInterval(() => {
            var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;

        var timeOfDay = hours < 12 ? "AM" : "PM";
        hours = hours > 12 ? hours - 12 : hours;
        var currentTimeString = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;
        document.getElementById("time").innerHTML = currentTimeString;
    }, 1000);

