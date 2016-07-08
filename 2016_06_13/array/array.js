
/**
 * Created by sks on 2016/6/13.
 */

var arr=[1,2,7,"ucai","wu"];
// arr.push("duo");//在元素后面添加新元素；
// arr.splice(0,2,666,"hah");//从第0个元素开始，删除2个元素，添加"ucai"和"wu"；
//arr.splice(1,2);//从第1个元素开始，删除2个元素；（开始位置，删除长度，添加的元素）；

//var arr2=arr.concat("3af",2);//连接数组；
//console.log(arr2);

var arr3=arr.join(" ");//将数组转化为字符串；
console.log(arr3);

//arr.pop();//产出数组末尾的元素;
arr.shift();//删除数组第一个元素；

console.log(arr);
