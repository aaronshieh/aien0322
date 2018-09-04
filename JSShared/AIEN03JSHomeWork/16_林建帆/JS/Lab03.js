var imgs=document.querySelectorAll("img.s");
var imgsLen=imgs.length;
// alert(imgsLen);
var flag = false;
for(var i=0;i<imgsLen;i++){
    imgs[i].addEventListener("mouseover",mouseOver);
    imgs[i].addEventListener("mouseout",mouseOut);
    imgs[i].addEventListener("click",Click);
    imgs[i].addEventListener("dblclick",DblClick);
}

function mouseOver(){
    // alert(this.id);
    // alert(this.id.length);
    if (flag == false){
        var starNo=this.id.substr(3);
        // alert(this.id.substr(3));
        for(var i=0;i<starNo;i++){
            imgs[i].src="images/chngstar.gif";
    }//if
    document.getElementById("iddiv").innerHTML=starNo+"顆星星";
}
}//function mouseOver()

function mouseOut(){
    if (flag == false){
        var starNo = this.id.substr(3);
        //alert(starNo);
        for (var j=4; j>=starNo-1; j--){
        //alert(j);
        imgs[j].src="images/star.gif"; 
        document.getElementById("iddiv").innerHTML= starNo-1 + "顆星星";
        }
    }//if (flag == false)
}//function mouseOut()

function Click(){
    flag = true;
}

function DblClick(){
    flag = false;
}

