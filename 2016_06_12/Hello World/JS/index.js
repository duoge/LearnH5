/**
 * Created by sks on 2016/6/12.
 */


/*
 for (var i = 0;i < 100;i++ ){
 console.log(i);
 }

 var i=0;
 while(i<100){
 console.log(i);
 i++;
 }

 var i = 0;
 do{
 console.log(i);
 i++;
 }while(i < 100);
 */


// for (var i=1;i<=5;i++){
//     var str="";
//     for (var j=1;j<=i;j++){
//         str +="*"
//     }
//     console.log(str);
// }
/*
 for(var i=1;i<=5;i++){
 for(var j=1;j<=i;j++){
 document.write("* ");
 }
 document.write("<br/>");
 }
 */
/*
 for (var i = 1; i <= 9; i++) {
 var str1 = "";
 for (var j = 1; j <= i; j++) {
 str1 += j + "*" + i + "=" + i * j + " ";
 }
 console.log(str1);
 }

 var str = "Hello World";
 console.log(str.substr(2,2));//截取字符串，（起始位置，截取长度）；
 console.log(str.substring(2,4));//截取字符串，（起始位置，终止位置）；
 console.log(str.indexOf("o",5));//从前往后查找元素下标；
 console.log(str.lastIndexOf("o",7));//从后往前查找元素下标；
 console.log(str.charAt(6));//获取下表为6的字符；
 console.log(str.charCodeAt("H"));//获取字符编码；
 console.log(String.fromCharCode(str.charCodeAt(1)-32));//小写转换为大写；
 console.log(str.toLowerCase());//转换为大写；

 var str2=str.replace("llo","wwe");
 console.log(str);
 console.log(str2);
 */
/*

var str = "Hello %s,%d/n";
//console.log(str3.replace(str3.substr(str3.indexOf("%", 0), 2), "World"));
var str1 = str.replace(str.substr(str.indexOf("%", 0), 2), "World");
console.log(str1.replace(str1.substr(str1.indexOf("%", 0), 4), "100"));
*/


function printf() {
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
printf("Hello %s,%f",100,"World");
/*
 function prt() {
 var x=arguments[0];
 for (var i=1,i<arguments.length,i++){

 }
 }*/
