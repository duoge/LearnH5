/**
 * Created by sks on 2016/6/24.
 */



(function () {

    var p,targetContainer,currentDragged;

    function getElements() {
        p = document.getElementById("p");
        targetContainer=document.getElementById("target-container");
    }
    function implement1() {

        p.ondragstart=function (event) {
            currentDragged=p;
        };
        targetContainer.ondragover=function (event) {
            //阻止事件默认行为，默认不接受拖动元素，组织和可接受拖动元素
            event.preventDefault();
        };
        targetContainer.ondrop=function (event) {
            targetContainer.appendChild(currentDragged);

        }
    }

    function init() {
        getElements();
       // implement1();
        p.ondragstart=function (event) {
            event.dataTransfer.setData("domId",this.id);
        };
        // document.querySelectorAll(".container").forEach(function (item) {
        //     item.acceptDrop=ture;
        // });
        //var result=document.querySelectorAll(".container");
        var result=document.getElementsByClassName("container")
        for(var i=0;i<result.length;i++){
            result[i].acceptDrop=true;
        }
    }
    init();


})();