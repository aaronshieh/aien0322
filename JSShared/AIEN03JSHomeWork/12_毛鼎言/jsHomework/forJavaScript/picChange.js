picArray = ["blitzcrank","teemo","tristana"];
linkArray = [
    "http://leagueoflegends.wikia.com/wiki/Blitzcrank/Skins",
    "http://leagueoflegends.wikia.com/wiki/Teemo/Skins",
    "http://leagueoflegends.wikia.com/wiki/Tristana/Skins",
]
count = 0;
function init(){
flag = true;    //決定停止或播放  
changePic();    //開始就執行一次 避免延遲
autoPic = window.setInterval(changePic,1500);
document.getElementById("back").addEventListener("click",lastPic);
document.getElementById("resume").addEventListener("click",resumePic);
document.getElementById("forth").addEventListener("click",nextPic);
}
//自動輪播函式
function changePic(){
    if(count>picArray.length-1) count=0;
    document.getElementById("image").src = "../forPics/"+picArray[count]+".jpg";
    skinLinks(count);
    count++;
}
//上一張函式
function lastPic(){
    window.clearInterval(autoPic);
    count--;
    if(count<0) count = picArray.length-1;
    document.getElementById("image").src = "../forPics/"+picArray[count]+".jpg";
    flag = false;
}
//暫停/續播函式
function resumePic(){
    if(flag){ 
        window.clearInterval(autoPic);
        flag = false;
    }
    else init(); 
}
//下一張函式
function nextPic(){
    window.clearInterval(autoPic);
    count++;
    if(count>picArray.length-1) count = 0;
    document.getElementById("image").src = "../forPics/"+picArray[count]+".jpg";
    flag = false;
}
//超連結函式
function skinLinks(num){
    document.getElementById("link").href = linkArray[num];
}