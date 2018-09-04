chk1=0;
chk2=0;
chk3=0;

//確認姓名是否正確
//規則：(1.不可空白，2.至少兩個字，3.必須為中文字)
function chkName(){
    //取得元素值
    var name = new String(document.getElementById("account").value);
    nameLen = name.length
    if(name && nameLen>=2 )
    {
        re= /^[\u4E00-\u9FA5]{2,}$/
        //console.info(re.test(name))
        if(re.test(name))
        {
            chk1=1;
            document.getElementById("acccheck").className = "chk";
            document.getElementById("acccheck").innerHTML="<img src='images/check.png'>正確";
        }
        else
        {
            chk1=0;
            document.getElementById("acccheck").className = "err";
            document.getElementById("acccheck").innerHTML = "<img src='images/error.png'>名字需為中文。";
        }
        
    }
    else
    {
        chk1=0;
        document.getElementById("acccheck").className = "err";
        document.getElementById("acccheck").innerHTML="<img src='images/error.png'>名字不可為空白或小於2個字";
    }
}

//確認密碼是否正確
//規則：(1.不可空白，2.不包含中文字,至少6個字且必須包含英文字母、數字、特殊字元[[!@#$%^&*])
function chkPassword() {
    //取得元素值
    var pwd = new String(document.getElementById("pwd").value);
    pwdlen = pwd.length;
    //判斷元素值是否為空白，密碼長度是否大於6
    if (pwd == "") 
    {
        chk2=0;
        document.getElementById("pwdcheck").className = "err";
        document.getElementById("pwdcheck").innerHTML="<img src='images/error.png'>密碼不可空白。";
    }
    //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
    else if (pwdlen > 6) 
    {
        if (isNaN(pwd)) 
        { 
            pwd = pwd.toUpperCase();
            var flag1 = 0;
            var flag2 = 0;
            var flag3 = 0;
            var re = /[!@#$%^&*]+/;
            
            for(var i=0; i <pwdlen ; i++)
            {
                
                if(flag1 == 0 && pwd.charAt(i) >= "A" && pwd.charAt(i) <= "Z")
                    flag1 = 1;
                if(flag2 == 0 && pwd.charAt(i) >= "0" && pwd.charAt(i) <= "9")
                    flag2 = 1;
                if(flag3 == 0 && re.test(pwd.charAt(i)))
                    flag3 = 1;
                    
                if(flag1 && flag2 && flag3)  
                {
                    chk2=1;
                    document.getElementById("pwdcheck").className = "chk";
                    document.getElementById("pwdcheck").innerHTML="<img src='images/check.png'>正確";
                    break;
                }
                else if (i == pwdlen-1)
                {
                    document.getElementById("pwdcheck").className = "err";
                    document.getElementById("pwdcheck").innerHTML="<img src='images/error.png'>密碼需含英文數字或特殊符號[!@#$%^&*]格式";
                    chk2=0;
                }
            }
        }
        else 
        {
            chk2=0;
            document.getElementById("pwdcheck").className = "err";
            document.getElementById("pwdcheck").innerHTML="<img src='images/error.png'>密碼需含英文數字或特殊符號[!@#$%^&*]格式";
        }
    }
    else
    {
        chk2=0;
        document.getElementById("pwdcheck").className = "err";
        document.getElementById("pwdcheck").innerHTML="<img src='images/error.png'>密碼長度需滿七碼。";
    } 


}

// 確認日期格式是否正確
function chkDate(){
    //取得元素值
    var date = new String(document.getElementById("date").value);
    var d = new Date(date);
    //console.info(date.split("/")[2] + d.getDate())
    if(d.getDate() == date.split("/")[2] )
    {
        chk3=1;
        document.getElementById("dcheck").className = "chk";
        document.getElementById("dcheck").innerHTML="<img src='images/check.png'>正確";
    }
    else
    {
        chk3=0;
        document.getElementById("dcheck").className = "err";
        document.getElementById("dcheck").innerHTML="<img src='images/error.png'>日期格式錯誤";
    }
    
}

//確認所有輸入是否成功正確
function chkSend(){
   if(chk1 && chk1 && chk3)
   {
       //題目無詳細要求，故alert...... 
       alert("全部確認成功");
       document.getElementById("form1").reset()
       reset();
       
   }
   else
   {
       
       alert("您尚未填入正確資料，請重新輸入再送出");
   }
}

function reset(){
    chk1=0;
    chk2=0;
    chk3=0;
    document.getElementById("acccheck").innerHTML="";
    document.getElementById("pwdcheck").innerHTML="";
    document.getElementById("dcheck").innerHTML="";
}
