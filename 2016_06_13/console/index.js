/**
 * Created by sks on 2016/6/13.
 */
//作业
/*function printf() {
    var formatString = arguments[0];
    if (!formatString) {
        console.error("参数不正确")
    }
    for (var i = 1; ; i++) {
        var index = formatString.indexOf("%");
        if (index == -1) {
            break;
        }
        var typeChar=formatString.charAt(index+1);
        var replaceVar=arguments[i];
        switch (typeChar){
            case "s":
                if (typeof replaceVar!="string"){
                    console.warn("第"+i+"类型不匹配");
                }
                break;
            case "f":
                if(typeof replaceVar!="number"){
                    console.warn("第"+i+"类型不匹配");
                }
                break;
        }
        formatString=formatString.substring(0,index)+replaceVar+formatString.substring(index+2);
    }
    console.log(formatString);
}
printf("Hello %s,%f",100,"World");*/

window.console.error("");//输出错误信息 ；级别最高
window.console.warn("");//输出警告信息
window.console.info("");//输出信息
window.console.log("");//输出日志；级别最低

window.console.assert("");//断言，一辈子基本不用