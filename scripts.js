var newDate = new Date();

function dateget() {
    var month = eval(newDate.getMonth()) + 1
    if (month < 10) {
        month = '0' + month;
    }

    document.getElementById('dateprint1').innerHTML = newDate.getDate() + '/' + month + '/' + newDate.getFullYear();
    document.getElementById('dateprint2').innerHTML = newDate.getDate() + '-' + month + '-' + newDate.getFullYear();
}

function getload() {
    dateget();
    var today = "";
    var day = newDate.getDay();

    switch (day) {
        case 0:
            today = "Sunday";
            break;

        case 1:
            today = "Monday";
            break;
        case 2:
            today = "Tuesday";
            break;
        case 3:
            today = "Wednesday";
            break;
        case 4:
            today = "Thrusday";
            break;
        case 5:
            today = "Friday";
            break;
        case 6:
            today = "Saturday";
            break;
        default:
            break;
    }

    document.getElementById('dayPrint').innerHTML = today;

    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var sec = newDate.getSeconds();

    var amOrPm = " AM";
    if (hours > 12) {
        amOrPm = " PM";
        hours = hours % 12;
    }


    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }
    document.getElementById('currentTime').innerHTML = hours + amOrPm + " : " + minutes + " : " + sec;

}