    /**
 * Created by plter on 6/17/16.
 */

window.wuduo = window.wuduo || {};//命名空间；

(function () {

    function Human(name) {
        this._name = name;
    }

    Human.prototype.sayHello = function () {
        console.log(this._name + " say hello");
    };
    //将属性添加到对象，或修改现有属性
    //
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        }
    });

    wuduo.Human = Human;
})();