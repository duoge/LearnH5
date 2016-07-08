/**
 * Created by sks on 2016/6/25.
 */


window.wuduo=window.wuduo||{};
(function () {

    function Ini(str) {
        var  pNode=/\[(.*)\]/g;
        var pKv=/(.*)=(.*)/g;
        while(true){
            var result=pNode.exec(str);
            if (result){
                var nodeName=result[1];
                this[nodeName]={};

                var startIndex=result.index+result[0].length;
                var endIndex=str.indexOf("[",startIndex);
                if (endIndex==-1){
                    endIndex=str.length;
                }
                var nodeContent=str.substring(startIndex,endIndex);
                while(true){
                    var kvResult=pKv.exec(nodeContent);
                    if (kvResult){
                        this[nodeName][kvResult[1].trim()]=kvResult[2].trim();
                    }else {
                        break;
                    }
                }
            }else {
                break;
            }
        }
    }
    wuduo.Ini=Ini;
})();
