/**
 * Created by sks on 2016/6/27.
 */

(function () {
    function Main() {
        /**
         *
         * @type {HTMLCanvasElement}
         * @private
         */
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");
        
        //this.drawRect();
        //this.drawCircle();
        //this.drawLines();
        this.drawText();
        this.drawImg()
    }

    Main.prototype.drawRect=function () {
        this._context2d.fillStyle="#ff0000";
        this._context2d.fillRect(10,10,100,100);//矩形的坐标x值，y值，矩形宽，高

        //this._context2d.lineWidth=10;//边框的宽度
        this._context2d.strokeRect(1,10,100,100);//边框横坐标，纵坐标，边框宽，高
    };


    Main.prototype.drawCircle=function () {
        this._context2d.beginPath();//开始画圆
        this._context2d.arc(100,200,50,0,Math.PI*2);//圆心坐标x值，y值，画圆的半径，起始位置，画圆的弧度
        this._context2d.closePath();
        this._context2d.stroke();

        this._context2d.beginPath();
        this._context2d.moveTo(200,200);//将其实位置移动到的坐标位置
        this._context2d.arc(200,200,50,0,Math.PI/3);
        this._context2d.closePath();
        this._context2d.stroke();

    };
    Main.prototype.drawLines=function () {
        this._context2d.moveTo(400,100);
        this._context2d.quadraticCurveTo(300,0,200,100);//二次贝塞尔曲线
        this._context2d.stroke();
    };

    Main.prototype.drawText=function () {

        this._context2d.font="bold 36px Courier";//字体粗细，大小，字体样式
        this._context2d.fillStyle="red";
        this._context2d.fillText("Hello World",240,580);//文本内容，文本坐标
    };
    Main.prototype.drawImg=function () {
        var img=document.createElement("img");
        img.onload=function () {
            this._context2d.drawImage(img,0,0);
            
        }.bind(this);
        img.onerror=function () {
            console.log("图片无法加载")
        };
        img.src="photo.jpg";
    };
    
          
    new Main();
    
})();