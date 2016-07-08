/**
 * Created by sks on 2016/6/30.
 */


(function () {

    function Main() {

        this._MAX_VALUE = 120;
        this._data1 = [90, 96, 92];   //chrome
        this._data2 = [95, 93, 98];   //firefox
        this._data3 = [10, 8, 6];     //ie

        this._context2d = document.getElementById("canvas").getContext("2d");

        this.drawData1();
        this.drawData2();
        this.drawData3();
        this.drawR1();
        this.drawR2();
        this.drawR3();
        this.drawT1();this.drawT2();this.drawT3();
    }

    //chrome
    Main.prototype.drawData1 = function () {

        this.drawRect1(this.getPositionByIndex1(0));

        for (var i = 1; i < this._data1.length; i++) {
            this.drawRect1(this.getPositionByIndex1(i));
        }
        this._context2d.stroke();
    };
    Main.prototype.drawRect1 = function (p) {
        this._context2d.fillRect(p.x, p.y, 20, 400 - p.y);
    };
    Main.prototype.getPositionByIndex1 = function (index) {

        var y = 400 * (1 - this._data1[index] / this._MAX_VALUE);
        var x = (400 / 3) * index + 30;
        return {x: x, y: y};
    };


    //firefox
    Main.prototype.drawData2 = function () {
        this.drawRect2(this.getPositionByIndex2(0));
        for (var i = 1; i < this._data1.length; i++) {
            this.drawRect2(this.getPositionByIndex2(i));
        }
        this._context2d.stroke();
    };
    Main.prototype.drawRect2 = function (p) {
        this._context2d.fillStyle = "red";
        this._context2d.fillRect(p.x, p.y, 20, 400 - p.y);
    };
    Main.prototype.getPositionByIndex2 = function (index) {

        var y = 400 * (1 - this._data2[index] / this._MAX_VALUE);
        var x = (400 / 3) * index + 50;
        return {x: x, y: y};
    };

    //ie
    Main.prototype.drawData3 = function () {

        this.drawRect3(this.getPositionByIndex3(0));

        for (var i = 1; i < this._data1.length; i++) {
            this.drawRect3(this.getPositionByIndex3(i));
        }
        this._context2d.stroke();
    };
    Main.prototype.drawRect3 = function (p) {
        this._context2d.fillStyle = "blue";
        this._context2d.fillRect(p.x, p.y, 20, 400 - p.y);
    };
    Main.prototype.getPositionByIndex3 = function (index) {

        var y = 400 * (1 - this._data3[index] / this._MAX_VALUE);
        var x = (400 / 3) * index + 70;
        return {x: x, y: y};

    };


    Main.prototype.drawR1 = function () {
        this._context2d.fillStyle = "black";
        this._context2d.fillRect(450, 100, 20, 20)
    };
    Main.prototype.drawR2 = function () {
        this._context2d.fillStyle = "red";
        this._context2d.fillRect(450, 150, 20, 20)
    };
    Main.prototype.drawR3 = function () {
        this._context2d.fillStyle = "blue";
        this._context2d.fillRect(450, 200, 20, 20)
    };

    Main.prototype.drawT1=function () {
        this._context2d.fillStyle="black";
        this._context2d.font="bold 25px Courier";
        this._context2d.fillText("Chrome",480,120);
    };
    Main.prototype.drawT2=function () {
        this._context2d.fillStyle="red";
        this._context2d.font="bold 25px Courier";
        this._context2d.fillText("Firefox",480,170);
    };
    Main.prototype.drawT3=function () {
        this._context2d.fillStyle="blue";
        this._context2d.font="bold 25px Courier";
        this._context2d.fillText("IE",480,220);
    };


    new Main();
})();