/**
 * Created by sks on 2016/6/25.
 */


(function () {
    function init() {
        $.get("config.ini").done(function (data) {
            var ini=new wuduo.Ini(data);
            console.log(ini)
        });
    }
    init();
    
})();