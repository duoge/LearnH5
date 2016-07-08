/**
 * Created by sks on 2016/6/15.
 */
(function () {

    function Students(name) {
        var self = Human(name);

        self.learn = function () {
            console.log(self.name + "学习")

        };
        var superSayHello=self.sayHello;
        self.sayHello=function () {
            // superSayHello();
            console.log("学生"+self.name+"说：“你好”");
        };
        return self;
    }
    
    window.Student=Students;

})();