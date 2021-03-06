/**
 * Created by sks on 2016/6/29.
 */


(function () {

    var Config = {CIRCLE_X: 200, CIRCLE_Y: 200, CIRCLE_R: 100};


    function Main() {
        this._data = [
            {name: "Android", value: 0.5, fillColor: "red"},
            {name: "iOS", value: 0.4, fillColor: "green"},
            {name: "JavaME", value: 0.06, fillColor: "blue"},
            {name: "WindowPhone", value: 0.04, fillColor: "yellow"}
        ];
        this._context2d = document.getElementById("canvas").getContext("2d");

        this.drawData();
        this.addListeners();
    }

    Main.prototype.addListeners=function () {
        var c=this._context2d.canvas;

        c.onclick=function () {
            var requestFullScreen=c.requesFullScreen;
            if (!requestFullScreen) {
                requestFullScreen = c.webkitRequestFullScreen;
            }
            if (!requestFullScreen) {
                requestFullScreen = c.mozRequestFullScreen;
            }
            if (requestFullScreen) {
                requestFullScreen.call(c);
            } else {
                alert("你的浏览器不支持全屏");
            }
            
        }


    };

    Main.prototype.drawData = function () {

        var lastValue = 0;

        for (var i = 0; i < this._data.length; i++) {
            var item = this._data[i];
            var value = item.value * Math.PI * 2;
            var currentValue = lastValue + value;

            this._context2d.beginPath();
            this._context2d.moveTo(Config.CIRCLE_X, Config.CIRCLE_Y);
            this._context2d.arc(Config.CIRCLE_X, Config.CIRCLE_Y, Config.CIRCLE_R, lastValue, currentValue);
            this._context2d.closePath();
            this._context2d.fillStyle = item.fillColor;
            this._context2d.fill();

            lastValue = currentValue;

        }

    };
    new Main();

})();