/**
 * Created by plter on 6/18/16.
 */

window.wuduo = window.wuduo || {};

(function () {

    function Student(name) {
        return {
            __proto__: wuduo.Human(name),

            sayHi: function () {
                console.log(this.name + " say hi");
            },

            sayHello: function () {
                this.__proto__.sayHello.call(this);

                console.log(this.name + "说你好");
            }
        };
    }

    wuduo.Student = Student;

})();