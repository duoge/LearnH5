/**
 * Created by sks on 2016/6/28.
 */
// (function () {
//     var canvas=document.getElementById("canvas");
//     canvas.style="border:1px solid black;background:#f0ffff";
//     var context=canvas.getContext("2d");
//
//     //添加mousedown监听事件，在用户鼠标按下后开始画线，并注册mousemove事件
//     canvas.addEventListener("mousedown",function(event){
//
//         context.beginPath();
//         context.moveTo(event.clientX, event.clientY);
//         canvas.addEventListener("mousemove",onMouseMove,false);
//     },false);
//
//     //在鼠标移动时划线
//     function onMouseMove(event){
//         context.lineTo(event.clientX,event.clientY);
//         context.stroke();
//     }
//     //在鼠标按键松开后，注销鼠标移动事件
//     canvas.addEventListener("mouseup",function(event){
//         canvas.removeEventListener("mousemove",onMouseMove,false);
//     },false);
//
// })();