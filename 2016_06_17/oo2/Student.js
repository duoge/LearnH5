/**
 * Created by plter on 6/17/16.
 */

window.ucai = window.ucai || {};//命名空间；


(function () {

    function Student(name) {
        ucai.Human.call(this, name);//把当前对象和参数（name）传递给父类Human；
    }

    //继承自Human
    Student.prototype = new ucai.Human();

    Student.prototype.learn = function () {
        console.log(this.name + "学习");
    };

    // var superSayHello = Student.prototype.sayHello;
    Student.prototype.sayHello = function () {
        //执行父类的函数
        ucai.Human.prototype.sayHello.call(this);
        // superSayHello.call(this);

        console.log(this.name + "说你好");
    };

    window.ucai.Student = Student;
})();