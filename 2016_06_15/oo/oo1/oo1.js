/**
 * Created by sks on 2016/6/15.
 */

(function () {

    function init() {
        var h = Human("ucai");
        h.sayHello();
        
        var s=Student("ZhangSan");
        s.sayHello();
        s.learn();
    }
    init();
    
})();
