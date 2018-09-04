document.getElementById("name").addEventListener("blur",nablur);
document.getElementById("pwd").addEventListener("blur",pwdblur);
document.getElementById("date").addEventListener("blur",dateblur);

function nablur(){
    var theName = document.getElementById("name").value;
    var theNameLen = theName.length;
    if (theName=="")
        document.getElementById("h1").innerHTML = "<img src='../images/error.png'>不可為空白";
    else if (theNameLen>=2){
        for (var i=0;i<theNameLen;i++){
            if (theName.charCodeAt(i)<0x4E00 || theName.charCodeAt(i)> 0x9FA5 ){
                document.getElementById("h1").innerHTML = "<img src='../images/error.png'>請輸入中文";
                break;} 
            else 
                document.getElementById("h1").innerHTML = "<img src='../images/right.jpg'>";                                      
        }  
    }   
    else 
        document.getElementById("h1").innerHTML = "<img src='../images/error.png'>請輸入超過兩個字"; 
}
function pwdblur(){
    var thePwd = document.getElementById("pwd").value;
    var thePwdLen = thePwd.length;
    var DwdReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/
    var flag1=false,flag2=false,flag3=false;    //定義兩個flag,預設是False  (global)
        //判斷元素值是否為空白，密碼長度是否大於6
        if(thePwd=="")     //如果元素值為空值
            document.getElementById("h2").innerHTML = "<img src='../images/error.png'>不可為空值";   
        else if(thePwdLen>=6) {
            //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
            for(var i=0;i<thePwdLen;i++){    //設定for迴圈,預設i為0,最大不會超過字串長度,每一輪+1
                var PwdChr=thePwd.charAt(i).toUpperCase();   //取得第一個值，同時轉化為大寫
                //alert(PwdChr);                            
                if(PwdChr>="A" && PwdChr<="Z")     //如果取出來的值在A與Z之間
                    flag1=true;                    //flag為True(local)
                else if (PwdChr>="0" && PwdChr<="9")   //或是取出來的值在0與9之間
                    flag2=true;                     //flag為真(local)
                else if (DwdReg.test(thePwd)){
                    flag3=true;
                }              
                if(flag1 && flag2 && flag3) break;          //如果兩個flag都為True,中斷這個迴圈
            }
            //離開迴圈後要在檢定一次，是否兩個flag都為True(因為不為True迴圈結束後還是會跳出回圈)
            if(flag1 && flag2 && flag3) document.getElementById("h2").innerHTML = "<img src='images/right.jpg'>"; 
            else document.getElementById("h2").innerHTML = "<img src='../images/error.png'>密碼要包含英文、數字與特殊符號";    
        }
        //這邊是延續最上面的檢驗長度是否超過6個字元，否則就要發出訊息
        else{
            document.getElementById("h2").innerHTML = "<img src='../images/error.png'>密碼要超過六個字元";
        }    
}
function dateblur(){
    var theDate = new Date(document.getElementById("date").value);
    var ckDate = theDate.getDate();
    var keyDate = document.getElementById("date").value.substr(8);
        // document.getElementById("h3").innerHTML = keyDate;
        // document.getElementById("h3").innerHTML = ckDate;
    if (keyDate == ckDate)
        document.getElementById("h3").innerHTML = "<img src='../images/right.jpg'>";
    else 
        document.getElementById("h3").innerHTML ="<img src='../images/error.png'>日期格式錯誤";         
}