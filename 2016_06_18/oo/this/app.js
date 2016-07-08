/**
 * Created by plter on 6/18/16.
 */

// console.log(this);

(function () {
    // console.log(this);

    function A() {

        var count = 0;

        this.timerHandler = function () {
            count++;
            console.log(count);
            console.log(this);
        };

        this.startTimer = function () {
            //绑定函数的目标对象.bind
            setInterval(this.timerHandler.bind(this), 2000);
        };


        this.hello = function () {
            console.log("Hello");
        };
    }

    var a = new A();
    a.startTimer();
})();