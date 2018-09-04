 function test(){
            var flag_not_chinese = false;
            var color_flag = false;
            var the_account = document.getElementById('account').value;
            var count_word_chinese =0;
                // if (0X4E00 <= the_account[0] && the_account[0] <=0X9FA5)
                // document.getElementById("acccheck").innerHTML = 'chinese';
                // -----------------------------------------------------
            if (the_account=='')
                document.getElementById("acccheck").innerHTML = '不可為空白';
            else if (the_account.length >=2){
                // document.getElementById("acccheck").innerHTML = '>=2';  //ok
                for (i in the_account){
                    var uni_char = the_account[i].charCodeAt();    //ok
                    if (0x4E00 <=uni_char && uni_char <= 0x9FA5){
                        // color_flag = true;
                        count_word_chinese ++;
                        document.getElementById('acccheck').innerHTML=
                        '<img src="../images/check.png">正確';
                        }
                    else flag_not_chinese = true;
                    if (flag_not_chinese == true) break;
                }
                if (flag_not_chinese == true) 
                document.getElementById('acccheck').innerHTML='限定中文字';
            }
            else document.getElementById('acccheck').innerHTML='至少兩個字';
            if (count_word_chinese>=2 && flag_not_chinese==false)
                color_flag = true;
            if (color_flag==true)
                document.getElementById('acccheck').style.color='rgb(0, 161, 22)';
            else if (color_flag == false)
            document.getElementById('acccheck').style.color='red';
            console.log('color: '+color_flag);
        }
        
        function test2(){
            var the_pd = document.getElementById('pwd').value;  //ok
            var flag_en = false;
            var flag_num = false;
            var flag_have_chinese = false;
            var color_flag = false;
            var need = ['!','@','#','$','%','^','&','*'];
            var have_need =false;
            if (the_pd=='')
                document.getElementById('pwdcheck').innerHTML='不可為空白';
            else if (the_pd.length >=6){
            // document.getElementById('pwdcheck').innerHTML='>=6'; //ok
            for (i in the_pd){
                var pd_char = the_pd[i].toUpperCase();    //ok
                var re = /[!@#$%^&*]/gi;
                var uni_char = pd_char.charCodeAt();
                    // if (0x4E00 <=pd_char && pd_char <= 0x9FA5)
                if ('A'<= pd_char && pd_char <= 'Z')
                    flag_en = true;
                else if ('0' <= pd_char && pd_char <='9')
                    flag_num = true;
                // else if (re.test(pd_char) )
                else if (0x4E00 <=uni_char && uni_char <= 0x9FA5)
                    flag_have_chinese = true;
                else if (re.test(pd_char))
                    have_need=true;
                    console.log(pd_char);
                    // document.getElementById('pwdcheck').innerHTML='不可有中文';
                // if (flag_en==true && flag_num ==true)break;
            }    
            }
            else
                document.getElementById('pwdcheck').innerHTML='至少6個字';
            if (flag_en==true && flag_num ==true &&have_need==true){
                if (flag_have_chinese==true)
                    document.getElementById('pwdcheck').innerHTML='不可有中文';
                else{
                    color_flag = true;
                    document.getElementById('pwdcheck').innerHTML=
                    '<img src="../images/check.png">正確';
                    console.log('ch',flag_have_chinese);
                    }
                }
            else if (flag_en==true && flag_num==false)
                document.getElementById('pwdcheck').innerHTML='缺少數字';
            else if (flag_en==false && flag_num==true)
                document.getElementById('pwdcheck').innerHTML='缺少英文';
            else if(flag_en==true && flag_num==true &&have_need==false)
                document.getElementById('pwdcheck').innerHTML='缺少特殊字元';
            if (color_flag==true )
                document.getElementById('pwdcheck').style.color='rgb(0, 161, 22)';
            else
                document.getElementById('pwdcheck').style.color='red';
            // console.log(color_flag);
        }

        
        // var abc = '2018/6/2';
        // var max_year_b = String(new Date());
        // var max_year = Number(max_year_b.match(/\d+/g)[1]);
        // var year = Number(abc.match(/^\d+/)[0]);
        // var mon_b = abc.match(/\/\d{1,2}\//)[0];
        // var mon = Number(mon_b.match(/\d+/)[0]);
        // var day = Number(abc.match(/\d+$/)[0]);
        // ======================================================
        function test3(){
        // var inpute_date = '2014/05/2'
        var inpute_date = document.getElementById('date').value;
        var date_list = inpute_date.split('/')
        // console.log(date_list)
        var year = Number(date_list[0])
        var mon = Number(date_list[1])
        var day = Number(date_list[2])
        var max_year_b = String(new Date());
        var max_year = Number(max_year_b.match(/\d+/g)[1]);
        var day_correct =false;
        var tt =[1,31,2,28,3,31,4,30,5,31,6,30,7,31,8,31,9,30,10,31,11,30,12,31];
        var tt2 =[1,31,2,29,3,31,4,30,5,31,6,30,7,31,8,31,9,30,10,31,11,30,12,31];
        var special_year =false;
        if (year%4==0 && year%100!=0 || year%400==0)
            special_year = true;
        // console.log('year',special_year);

        if (inpute_date.split('/').length==3){
            // document.write('11<br>');
            if (1<=year && year <=max_year){
                // document.write('year correct<br>')    
            for (i=0, k=1; i<tt.length; i+=2, k+=2){
                // document.write(i+','+tt[i]+' , '+k+','+tt[k]+'<br>');
                if (mon == tt[i]){
                    // document.write(tt[i]+' , '+tt[k]);
                    if (1<= day && day<=tt[k] && special_year==false){
                        document.getElementById('dcheck').innerHTML='正確';
                        day_correct=true;
                        break;
                        }
                    else if (1<= day && day<=tt2[k] && special_year==true){
                        document.getElementById('dcheck').innerHTML='正確';
                        day_correct=true;
                        break;
                    }
                    else
                        document.getElementById('dcheck').innerHTML='日 錯誤';
                }
            }
            if (mon>12 || mon<1)
                document.getElementById('dcheck').innerHTML='月 錯誤';
            }
            
            else
                document.getElementById('dcheck').innerHTML='年 錯誤';
        }
        else
            document.getElementById('dcheck').innerHTML='格式錯誤';
        }
            
        
        // --------------------------------addeventlistener-------------------------
        
        document.getElementById('account').addEventListener('input',test );
        document.getElementById('pwd').addEventListener('input', test2);
        document.getElementById('date').addEventListener('blur', test3);
        // ----------------------test-------------------
    // var x = '中'.charCodeAt();
    // console.log(0x4E00 <=x && x <= 0x9FA5);

    // y = '中文werkjh6654as';
    // yy = y.match(/[^\w]{1}/gi);
    // console.log(yy);