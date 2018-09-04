var imgs=document.querySelectorAll("img.s");
var imgsLen=imgs.length;
// alert(imgsLen);
for(var i=0;i<imgsLen;i++){
    imgs[i].addEventListener("mouseover",mouseOver);
    imgs[i].addEventListener("mouseout",mouseOut);
    imgs[i].addEventListener("click",Click);
    imgs[i].addEventListener("dblclick",dbClick);
}
flag = false
function mouseOver(){
    if (!flag){
        var starNo=this.id.substr(3);
        for(var i=0;i<starNo;i++){
            imgs[i].className="n";
        }
        document.getElementById("iddiv").innerHTML=starNo+"顆星星";
    }
}
function mouseOut(){
    if (!flag){
        var starNo=this.id.substr(3);
        for(var i=0;i<starNo;i++){
            imgs[i].className="s";
        }
        document.getElementById("iddiv").innerHTML="";
    }
}

function Click(){
    if (!flag){
        flag = true
        var starNo=this.id.substr(3);
        for(var i=0;i<starNo;i++){
            imgs[i].className="n";
        }
        document.getElementById("iddiv").innerHTML=starNo+"顆星星";
    
    }
}
function dbClick(){
    for(var i=0;i<imgsLen;i++){
        imgs[i].className="s";
    }
    flag = false
}
