/**
 * Created by sks on 2016/6/28.
 */

(function () {

    function Main() {
        this._context2d = document.getElementById("canvas").getContext("2d");

        var img = new Image();
        img.onload = function () {
            this.draw(img);
        }.bind(this);
        img.src = "photo.jpg";

    }

    Main.prototype.draw = function (img) {
        var g =this._context2d;
        
        g.drawImage(img,0,0);
        
        
    };

    new Main();

})();