/**
 * Created by sks on 2016/6/28.
 */



(function () {
    function Main() {
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");

        this.drawRect();
    }
    Main.prototype.drawRect=function () {

        this._context2d.save();
        this._context2d.fillStyle="red";
        this._context2d.translate(100,0);
        this._context2d.fillRect(0,0,100,100);
        
        this._context2d.save();
        this._context2d.fillStyle="blue";
        this._context2d.fillRect(100,0,100,100);
        this._context2d.restore();
        
        this._context2d.restore();

    };
    
    new Main();
})();
