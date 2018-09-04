

var picAry=["image/character_1.png","image/character_2.png","image/character_3.png","image/character_4.png","image/character_5.png",
"image/character_6.png","image/character_7.png","image/character_8.png","image/character_9.png","image/character_10.png","image/character_11.png","image/character_12.png"]
var linkAry=["doraemon.htm","dorami.htm","nobita.htm","shizuka.htm","giant.htm","suneo.htm","families.htm","families.htm","families.htm","others.htm","hidetoshi.htm","families.htm"]
var count = 0;
var pre = 11;
var i=1;
function pausePlay(){
    if(i)
    {
        window.clearInterval(t);
        i = 0;
    }
    else
    {
        t=window.setInterval(next,1500);
        i = 1;
    }
}

function back(){
    pre = count;
    count--;

    if(count < 0) 
    {
        count=11;
        pre=0;
    }
    setAd();
   
}

function next(){
    pre = count;
    count++;

    if(count > 11) 
    {
        count=0;
        pre=11;
    }

    setAd();
}
function setAd(){
    document.getElementById("pic").src=picAry[count];
    document.getElementById("lad").href="https://chinesedora.com/character/"+linkAry[count];
    document.getElementById("sad" + (count+1).toString()).className = "adsborder";
    document.getElementById("sad" + (pre+1).toString()).className = "ads";
}

var t= window.setInterval(next,1500);

function mouseover(){
    this.className= "controlc";
}
function mouseout(){
    this.className= "control";
}
