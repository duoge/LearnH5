/**
 * Created by sks on 2016/6/27.
 */

(function () {

    function Main() {
        /**
         *
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this.c=document.getElementById("canvas");
        this.c.style="border:1px solid black;background:#3c3c3c;";
        this._context2d=this.c.getContext("2d");
        this.draw();
    }

    Main.prototype.draw=function () {
        (function (self) {
            self.c.addEventListener("mousedown",function (event) {
                self._context2d.beginPath();
                self._context2d.moveTo(event.clientX,event.clientY);
                self.c.addEventListener("mousemove",onMouseMove,false);
            },false);

            function onMouseMove (event) {
                self._context2d.lineTo(event.clientX,event.clientY);
                self._context2d.stroke();
            }
            self.c.addEventListener("mouseup",function(event){
                self.c.removeEventListener("mousemove",onMouseMove,false);
            },false);

        })(this);
    };

    new Main();
})();