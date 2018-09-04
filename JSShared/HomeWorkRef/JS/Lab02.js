document.getElementById("account").addEventListener("blur", AccCheckf);
document.getElementById("pwd").addEventListener("blur", PwdCheckf);
document.getElementById("date").addEventListener("blur", DateCheckf);


function AccCheckf() {
    var theName=document.getElementById("account").value;
    var theNameLen=theName.length;
    var flag=false;
    if(theName=="")
        document.getElementById("acccheck").innerHTML="you must enter";
    else if (theNameLen>=2){
        for(var i=0;i<theNameLen;i++){
            var theNameChr=theName.charCodeAt(i);
            if(theNameChr>=0x4e00 && theNameChr<=0x9fff)
                flag=true;
            else{
                 flag=false;
                 break;
            }           
        }
        if(flag) 
            document.getElementById("acccheck").innerHTML="correct" ;
        else 
            document.getElementById("acccheck").innerHTML="incorrect" ;
    }else
    document.getElementById("acccheck").innerHTML="name length must be greater than or equal to 2";;
}

function PwdCheckf() {
    var thePwd = document.getElementById("pwd").value;
    var thePwdLen = thePwd.length;
    var flag1 = false, flag2 = false, flag3=false;
    if (thePwdLen == 0) {
        document.getElementById("pwdcheck").innerHTML = "you must enter";
    } else if (thePwdLen >= 6) {
        for (var i = 0; i < thePwdLen; i++) {
            var PwdChr = thePwd.charAt(i).toUpperCase();//轉換為大寫
            if (PwdChr >= "A" && PwdChr <= "Z")
                flag1 = true;
            else if (PwdChr >= "0" && PwdChr <= "9")
                flag2 = true;
            else if (PwdChr == "!" || PwdChr == "@" || PwdChr == "#" || PwdChr == "$" ||
                PwdChr == "%" || PwdChr == "^" || PwdChr == "&" || PwdChr == "*")
                flag3 = true;
            if (flag1 && flag2 && flag3) break;
        }
        if(flag1 && flag2 && flag3)
            document.getElementById("pwdcheck").innerHTML = "correct";            
         else {
            document.getElementById("pwdcheck").innerHTML = "incorrect";
        }
    } else {
        document.getElementById("pwdcheck").innerHTML = "Password length must be greater than or equal to 6";
    }
}

function DateCheckf() {
    var theDate = document.getElementById("date").value;
    var sDate = theDate.split("/");
    var nDate = new Date(theDate);
    if (theDate == "") {
        document.getElementById("dcheck").innerHTML = "you must enter";
    } else if (sDate[0] == nDate.getFullYear() && sDate[1] == (nDate.getMonth() + 1) && sDate[2] == nDate.getDate()) {
        document.getElementById("dcheck").innerHTML = "correct";        
    } else {
        document.getElementById("dcheck").innerHTML = "incorrect";
    }
}