var imgs = document.querySelectorAll("img.s");
// alert(imgs.length);
// alert(imgs[0].id);
for (var i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("mouseover", mouseOver);
    imgs[i].addEventListener("mouseout", mouseOut);
    imgs[i].addEventListener("click", Click);
    imgs[i].addEventListener("dblclick", dblClick);
}

var flag = false;
function mouseOver() {
    var starNo = this.id.substr(3);
    if (!flag) {
       for (var i = 0; i < starNo; i++){
           imgs[i].className = "n";
        //    var j=i+1;
        //    document.getElementById("img"+j).src="......"
           console.log("mouseover=" + i);
        }
        document.getElementById("iddiv").innerHTML = starNo + "顆星星";     
    }
}

function mouseOut() {
    var starNo = this.id.substr(3);
    if (!flag) {
       for (var i = 0; i < starNo; i++) {
           imgs[i].className = "s";
        //    var j=i+1;
        //    document.getElementById("img"+j).src="......"
           console.log("mouseout=" + i);
        }
        document.getElementById("iddiv").innerHTML = "";     
    }
}

function Click() { 
        flag = true;     
        var starNo = this.id.substr(3);        
        if(imgs[0].className=="n")
            document.getElementById("iddiv").innerHTML ="選了"+ starNo + "顆星星";            
}

function dblClick() {
    flag = false;
    for (var i = 0; i < imgs.length; i++){
        imgs[i].className = "s";
    }
    document.getElementById("iddiv").innerHTML = "評價是幾顆星呢？";
}
