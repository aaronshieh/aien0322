var imgs=document.querySelectorAll("img.s");
var imgsLen=imgs.length;
var flag=true
// alert(imgsLen);
for(var i=0;i<imgsLen;i++){
    imgs[i].addEventListener("mouseover",mouseOver);
    imgs[i].addEventListener("mouseout",mouseOut);
    imgs[i].addEventListener("click",Click);
    imgs[i].addEventListener("dblclick",dblClick);
}

function mouseOver(){
    //alert(this.id);
    if (flag){
        var starNo=this.id.substr(3);
        for(var i=0;i<starNo;i++){
            imgs[i].className="n";
        }
        document.getElementById("iddiv").innerHTML=starNo+"顆星星";
    }
}
function mouseOut(){
    if (flag){
        var starNo=this.id.substr(3);
        for(var i=0;i<starNo;i++){
            imgs[i].className="s";
            document.getElementById("iddiv").innerHTML=starNo+"顆星星";}
    }
}
function Click(){
    var starNo=this.id.substr(3);
    flag=false
    for(var i=0;i<starNo;i++){
        imgs[i].className="n";
        document.getElementById("iddiv").innerHTML=starNo+"顆星星";
    }
}

function dblClick(){
    var starNo=this.id.substr(3);
    flag=true
    for(var j=0; j<5; j++){
        imgs[j].className="s";
        document.getElementById("iddiv").innerHTML=starNo+"顆星星";
    }
}
