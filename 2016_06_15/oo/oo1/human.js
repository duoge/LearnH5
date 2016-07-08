/**
 * Created by sks on 2016/6/15.
 */

(function () {
    //定义类，第一个字母必须大写,类是一个“定义”，实例是一个“对象”
    function Human(name) {
        var self = {};
        self.name = name;
        self.sayHello = function () {
            console.log(self.name + " say hello");
            //console.log(self);
        }
        return self;
    }

    window.Human = Human;

})();