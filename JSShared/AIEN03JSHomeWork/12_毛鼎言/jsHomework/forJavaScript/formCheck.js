function init(){
    document.getElementById("name").addEventListener("blur",checkName);
    document.getElementById("pwd").addEventListener("blur",checkPwd);
    document.getElementById("date").addEventListener("blur",checkDate);    
}
function checkName(){
    name = document.getElementById("name").value;
    nameLen = name.length;
    if (nameLen == 0)
        document.getElementById("msgName").innerHTML="<img src='../forPics/devil.png'>姓名不能是空白歐！";
    else if (nameLen < 2)
        document.getElementById("msgName").innerHTML="<img src='../forPics/devil.png'>姓名至少要兩個字歐！";
    else
        for(i=0; i<nameLen; i++){
            if (name.charCodeAt(i) < 0x4e00 || name.charCodeAt(i) > 0x9fff){
                document.getElementById("msgName").innerHTML="<img src='../forPics/devil.png'>姓名要全是中文字歐！";
                break;
            }                
        document.getElementById("msgName").innerHTML="<img src='../forPics/angel.png'>姓名OK！";
        }                              
}
// (不可空白,不包含中文字,至少6個字且必須包含英文字母、數字、特殊字元[[!@#$%^&*])
function checkPwd(){
    pwd = document.getElementById("pwd").value;
    allChinese = /[\u0800-\uFFFF]+/g;
    haveSpace = /\s+/g;
    specialChr = /[!@#$%^&*]+/;
    alpla = /[a-zA-Z]+/;
    number = /[0-9]+/;
    sixchr = /.{6,}/;
    if(pwd=="")
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/devil.png'>密碼不能留白歐！";
    else if(haveSpace.test(pwd))
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/devil.png'>密碼不能有空白鍵歐！";
    else if (allChinese.test(pwd))
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/devil.png'>密碼不能有中文歐！";
    else if(!specialChr.test(pwd)) 
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/devil.png'>密碼必須包含特殊字元!@#$%^&*一個以上歐！";
    else if(!alpla.test(pwd)) 
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/devil.png'>密碼必須包含英文字母一個以上歐！";    
    else if(!number.test(pwd)) 
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/devil.png'>密碼必須包含0~9一個以上歐！";
    else if(!sixchr.test(pwd))
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/devil.png'>密碼必須有六個字以上歐！";
    else
        document.getElementById("msgPwd").innerHTML="<img src='../forPics/angel.png'>密碼OK！";       
}
function checkDate(){
    // 先用正規式確認輸入日期的格式無誤
    ymdRe = /\d{4}\/\d{1,2}\/\d{1,2}/;
    // 再利用Date物件檢查閏年、不符現實的日期    
    ymd = document.getElementById("date").value.split("/");
    var userdate = new Date(ymd[0],ymd[1]-1,ymd[2]);
    if (!ymdRe.test(document.getElementById("date").value))
        document.getElementById("msgDate").innerHTML="<img src='../forPics/devil.png'>日期格式不對歐！";
    else if (userdate == "invalid"||(userdate.getMonth()+1)!=ymd[1])
        document.getElementById("msgDate").innerHTML="<img src='../forPics/devil.png'>這個日期不存在歐！";
    else
        document.getElementById("msgDate").innerHTML="<img src='../forPics/angel.png'>日期OK！";
}
