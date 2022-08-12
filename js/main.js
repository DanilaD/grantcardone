document.getElementById('min').innerHTML = '5';
document.getElementById('sec').innerHTML = '00';
startTimer();


function startTimer() {
    var m = document.getElementById('min').innerHTML;
    var ss = document.getElementById('sec').innerHTML;
    var s = checkSecond((ss - 1));
    if(s==59){m=m-1}
    if(m<0){ return }

    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('min2').innerHTML = m;
    document.getElementById('sec2').innerHTML = s;
    document.getElementById('min3').innerHTML = m;
    document.getElementById('sec3').innerHTML = s;
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
}