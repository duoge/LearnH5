/**
 * Created by sks on 2016/6/15.
 */

(function () {
    var divClock;

    function formatTime(num) {
        //return num >= 10 ? num + "" : "0" + num;
        return (num >= 10 ? "":"0")+num;
    }

    function showTime() {
        var date = new Date();

        divClock.innerHTML = formatTime(date.getHours()) + ":" +
                             formatTime(date.getMinutes()) + ":" +
                             formatTime(date.getSeconds());
    }

    function init() {
        divClock = document.getElementById("clock");

        showTime();
        setInterval(showTime, 1000);
    }

    init();
})();

/*(function () {

    var divClock= document.getElementById("clock");


    function formatTime(num) {
        return (num >= 10 ? "" : "0") + num;
    }

    function showTime() {

        var date = new Date();

        divClock.innerHTML = formatTime(date.getHours()) + ":" + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds());
    }

    function init() {

        showTime();
        setInterval(showTime, 1000);
    }

    init();

}());*/
