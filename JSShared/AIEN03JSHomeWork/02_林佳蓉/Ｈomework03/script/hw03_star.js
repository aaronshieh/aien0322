var flag = 1;
var stars = document.querySelectorAll("img.s");

for (var i=0; i<stars.length; i++)
{
    stars[i].addEventListener("mouseover",mouseOver);
    stars[i].addEventListener("mouseout",mouseOut);
    stars[i].addEventListener("click",Click);
}
document.addEventListener("dblclick",dblClick);

function mouseOver()
{
    if(flag)
    {
        var starNo = this.id.substr(3);
        for(var i=0; i<starNo; i++)
            stars[i].className="n";
        
        document.getElementById("iddiv").innerHTML = "評分中...."+starNo + "顆叮噹"
    }
}
function mouseOut()
{
    if(flag)
    {
        for(var i=0; i<stars.length; i++)
            stars[i].className="s";
        document.getElementById("iddiv").innerHTML = "";
    }
    
}


function Click()
{
    if(flag)
    {
        var starNo = this.id.substr(3);
        document.getElementById("iddiv").innerHTML= "<h3>您的評分為 "+ starNo + "顆叮噹</h3>";
        flag=0;
    }
    else
        alert("若您要重新評分，可雙擊滑鼠左鍵");
}
function dblClick(){
    flag=1;
    mouseOut()
}