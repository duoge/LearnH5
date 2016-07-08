/**
 * Created by plter on 6/17/16.
 */

window.wuduo = window.wuduo || {};

(function () {

    //new 关键字实现原理示意
    function NewObject(Class) {
        var self = {};
        //遍历对象；
        for (var k in Class.prototype) {

            self[k] = Class.prototype[k];
        }

        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        Class.apply(self, args);
        return self;
    }


    function App() {

        // var h = new ucai.Human("张三");
        // h.sayHello();

        // var h = NewObject(ucai.Human, "张三");
        // h.sayHello();

        var s = new wuduo.Student("吴多");
        s.sayHello();
        s.learn();
    }

    App();
})();
