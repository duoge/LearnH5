/**
 * Created by plter on 6/27/16.
 */

(function () {

    function Main() {

        this._context2d = document.getElementById("canvas").getContext("2d");
        this._video = document.createElement("video");

        this._video.autoplay = true;
        this._video.src = "video.mp4";
        this.render();

    }

    Main.prototype.render = function () {
        this._context2d.drawImage(this._video, 0, 0, 500, 400);
        var colorData = this._context2d.getImageData(0, 0, 500, 400);

        var bwData = this._context2d.createImageData(500, 400);

        for (i = 0; i < colorData.data.length; i += 4) {
            var color = (colorData.data[i] + colorData.data[i + 1] + colorData.data[i + 2]) / 3;
            bwData.data[i] = color;
            bwData.data[i+1] = color;
            bwData.data[i+2] = color;
            bwData.data[i+3] = 255;
        }

        this._context2d.putImageData(bwData, 0, 420);

        requestAnimationFrame(this.render.bind(this));
    };

    new Main();
})();