/**
 * Created by sks on 2016/6/13.
 */


(function () {
    //Function
    function hello(name) {
        console.log("Hello" + name);
    }
    hello("zhangsan");

    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    console.log(max(4, 6));

})();