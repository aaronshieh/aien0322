window.onload = function(){
    document.getElementById("name1").addEventListener("blur", checkName);
    document.getElementById("pwd1").addEventListener("blur", checkPassword);
    document.getElementById("date1").addEventListener("blur", checkDate);
};

var ok = "<img src='../images/ok.png'>";
var n_ok = "<img src='../images/invalid.png'>";

function checkName(){
    var name = document.getElementById("name1").value;
    var spName = document.getElementById("spName");

    // check name format
    if (name.length < 2 || name == "") {
        spName.innerHTML = "<span id='spName' class='incorrect'>"+n_ok+" 名字不正確</span>";
    } else {
        var valid = false
        for (i=0;i<name.length;i++) {
            valid = (name.charCodeAt(i) >= 0x4E00 && name.charCodeAt(i) <= 0x9FFF) ? true:false;
        }
        //valid ? alert("valid name"):alert("invalid name");
        if (valid) {
            spName.innerHTML = "<span id='spName' class='correct'>"+ok+" 正確</span>";
        } else {
            spName.innerHTML = "<span id='spName' class='incorrect'>"+n_ok+" 名字不正確</span>";
        }
    }
}

function checkPassword(){
    var password = document.getElementById("pwd1").value;
    var spPwd = document.getElementById("spPwd");
    
    // check password format
    re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (password == "") {
        spPwd.innerHTML = "<span id='spPwd' class='incorrect'>"+n_ok+" 密碼不可為空白</span>";
    } else if (password.length < 6) {
        spPwd.innerHTML = "<span id='spPwd' class='incorrect'>"+n_ok+" 密碼必需大於六個字元</span>";
    } else {
        re.test(password) ? 
        spPwd.innerHTML = "<span id='spPwd' class='correct'>"+ok+" 密碼正確</span>":
        spPwd.innerHTML = "<span id='spPwd' class='incorrect'>"+n_ok+" 密碼必需包含英文字母、數字、及特殊字元</span>";
    }
}

function checkDate(){
    var input_date = document.getElementById("date1").value;
    var spDate = document.getElementById("spDate");

    input_date_ary = input_date.split('/');
    if (input_date_ary.length == 3) { // true only if user input format is correct
        var date = new Date(input_date_ary[0], input_date_ary[1]-1, input_date_ary[2]);
        if (date.getMonth() + 1 == input_date_ary[1]) {
            spDate.innerHTML = "<span id='spDate' class='correct'>"+ok+" 日期正確</span>";
        } else {
            spDate.innerHTML = "<span id='spDate' class='incorrect'>"+n_ok+" 日期不正確</span>";
        }
    } else {
        spDate.innerHTML = "<span id='spDate' class='incorrect'>"+n_ok+" 日期不正確</span>";
    }
}