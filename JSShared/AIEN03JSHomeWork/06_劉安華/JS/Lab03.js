var imgs=document.querySelectorAll("img.s");
var imgsLen=imgs.length;
var flag = true;
// alert(imgsLen);
for(var i=0;i<imgsLen;i++){
    imgs[i].addEventListener("mouseover",mouseOver);
    imgs[i].addEventListener("mouseout",mouseOut);
    imgs[i].addEventListener("click",Click);
    imgs[i].addEventListener("dblclick",dblclick);
}

function mouseOver(){
    var starNo=this.id.substr(3);
    if (flag){
    for(var i=0;i<starNo;i++){
        imgs[i].className="n";
    }
    document.getElementById("iddiv").innerHTML="熱度"+starNo+"級";
}
}
function mouseOut(){
    var starNo=this.id.substr(3);
       if (flag) {
            for(var i=0;i<imgs.length;i++){
                imgs[i].className="s";            
            }
            document.getElementById("iddiv").innerHTML="請給出評價!";
        }    
        else if (flag=false){
            for(var i=0;i<starNo;i++){
                imgs[i].className="n";
            }
            document.getElementById("iddiv").innerHTML="熱度"+starNo+"級";
       }
}        
function Click(){
    flag=false;
    document.getElementById("iddiv").innerHTML="您的評價是熱度"+starNo+"級";
}
function dblclick(){
    flag=true;
    document.getElementById("iddiv").innerHTML="評價已重置，請重新評價";
}

