/**
 * Created by sks on 2016/6/30.
 */
(function () {
    function Main() {
        this._video = document.getElementById("video");
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");
        this._btnSave = document.getElementById("save");

        this.showCamera();
        this.takePhoto();
    }

    Main.prototype.showCamera = function () {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.getUserMedia({video: true}, function (stream) {

            var url = URL.createObjectURL(stream);
            this._video.src = url;
            this._video.play();

        }.bind(this), function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
    };
    var i = 0;
    Main.prototype.takePhoto = function () {

        this._btnSave.onclick = function () {
            this._context2d.drawImage(this._video, i * 250, 10, 200, 150);
            var photo = this._canvas.toDataURL();
            i = i + 1;

        }.bind(this);

    };
    new Main();
})();