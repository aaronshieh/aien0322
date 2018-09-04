function chkname(){
    var name = document.getElementById("account").value;
    var namelen = name.length;
    if (name ==""){
        document.getElementById("acccheck").innerHTML = "<img src='../images/error.png'>姓名不可為空白";
    }
    else if (namelen>=2){
        for (i=0;i<=namelen;i++){
            if ( name.charCodeAt(i) < 0x4E00 || name.charCodeAt(i) > 0x9FA5){
                document.getElementById("acccheck").innerHTML = "<img src='../images/error.png'>請輸入中文字";
                break;
            }
            else document.getElementById("acccheck").innerHTML = "<img src='../images/check.png'>正確";

        }
    }
    else document.getElementById("acccheck").innerHTML = "<img src='../images/error.png'>姓名要大於兩個字";
}
function chkpwd(){
    var passwd = document.getElementById("pwd").value;
    var pwdlen = passwd.length;
    var re=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).+$/;
    if (passwd ==""){
        document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png'>密碼不可為空白";
    }
    else if (pwdlen<6){
        document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png'>密碼至少要6個字"

    }
    else if (re.test(passwd)){
        document.getElementById("pwdcheck").innerHTML = "<img src='../images/check.png'>正確";
    }
    else document.getElementById("pwdcheck").innerHTML = "<img src='../images/error.png'>密碼格式不符";
};
function chkdate(){
    
    var tdate = new Date(document.getElementById("date").value);
    var ckdate = tdate.getDate();
    var ckdt = document.getElementById("date").value.substr(-2,2); 
    if (ckdt == ckdate){
        document.getElementById("dcheck").innerHTML = "<img src='../images/check.png'>正確";
    }
    else document.getElementById("dcheck").innerHTML = "<img src='../images/error.png'>日期格式不符";
}
document.getElementById("account").addEventListener("blur",chkname);
document.getElementById("pwd").addEventListener("blur",chkpwd);
document.getElementById("date").addEventListener("blur",chkdate);