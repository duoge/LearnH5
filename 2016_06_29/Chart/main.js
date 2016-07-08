/**
 * Created by sks on 2016/6/29.
 */

(function () {

    function Main() {
        this._MAX_VALUE = 100;
        this._data = [15, 21, 32, 20, 40, 25, 18, 30, 20, 35, 28, 25];

        this._context2d = document.getElementById("canvas").getContext("2d");

        this.drawData();
    }

    Main.prototype.drawData = function () {
        //绘制折线图

        var p = this.getPositionByIndex(0);
        this._context2d.moveTo(p.x, p.y);

        for (var i = 0; i < this._data.length; i++) {
            p = this.getPositionByIndex(i);
            this._context2d.lineTo(p.x, p.y);
            
        }
        this._context2d.stroke();

        //绘制柱状图
        //this.drawRect(this.get)


    };
    new Main();
})();