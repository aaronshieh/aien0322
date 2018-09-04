



// ---------------------test use for to create object key: function !-------------------------
// var obj_key = 'abcde'
// // console.log(obj_key.charAt(1))   // ok --> abcde
// var em_list = {}
// for (i in obj_key){
//     em_list[obj_key[i]] = //img_list[i];
//     function change_color(){
//         document.getElementById(img_list[i]).className='n';
//         console.log('arrive');
//     }
//     console.log(em_list)
// }

// // -------------------------------------------

function_set = {
    a :[function(){
        if(light_up1==false){
        score++;
        light_up1=true;
        // console.log('arrive1');
            document.getElementById('img1').className='n';
        }else if(light_up2==true){
            score--
            console.log(score);
            document.getElementById('img2').className='s';
    }
    },
    function(){
        // console.log('leave1');
            // document.getElementById('img1').className='s';
            var x1=setInterval(function(){
                if (score<2)
                    score=0;
                clearInterval(x1);   
            },100);
            
    }
    ],
    b :[function(){if(light_up1==true){
        if(light_up2==false){
        score++;
        light_up2=true;
        // console.log('arrive2');
            document.getElementById('img2').className='n';
        }else if(light_up3==true){
            score--
            console.log(score);
            document.getElementById('img3').className='s';
    }
    }},function(){
        // console.log('leave2');
            // document.getElementById('img2').className='s';
            var x2=setInterval(function(){
                if (1<score && score<3)
                    score=0;
                clearInterval(x2);
            },100);
            // var y2=setInterval(function(){
            //     if (score!=1 && score<3){
            //         score=0;
            //     clearInterval(y2);
            //     }
            // },100)
            
    }
    ],
    c :[function(){
        if(light_up2==true){
        if(light_up3==false){
        score++;
        light_up3=true;
        // console.log('arrive3');
            document.getElementById('img3').className='n';
        }else if(light_up4==true){
            score--
            console.log(score);
            document.getElementById('img4').className='s';
    }
    // else{
    //     score--;
    //     light_up3=false;
    //     console.log(score,light_up3);
    // }
    }},function(){
        // console.log('leave3');
            // document.getElementById('img3').className='s';
            var x3 =setInterval(function(){
                if (2<score && score<4)
                    score=0;
                    console.log('leave3');
                clearInterval(x3);
            },100)
    }
    ],
    d :[function(){
        if (light_up3==true){
        if(light_up4==false){
        score++;
        light_up4=true;
        // console.log('arrive4');
        document.getElementById('img4').className='n';
    }else if(light_up5==true){
            score--
            console.log(score);
            document.getElementById('img5').className='s';
    }
    else{
        score--;
        light_up4=false;
        console.log(score,light_up4);
    }
    }},function(){
        // console.log('leave4');
            // document.getElementById('img4').className='s';
            var x4=setInterval(function(){
                if (3<score && score<5)
                    score=0;
                    console.log('leave4',light_up4);
                clearInterval(x4);
            },100);
    }
    ],
    e :[function(){
        if (light_up4==true){
        score++;
        light_up5=true;
        // console.log('arrive5');
        document.getElementById('img5').className='n';
        }
    },function(){
        // console.log('leave5');
            // document.getElementById('img5').className='s';
            var x4=setInterval(function(){
                if (4<score && score<6)
                    score=0;
                clearInterval(x4);
            },100);
    }
    ],
    }

// for (i in function_set){
//     console.log(funcction_set[])
// }




var func_list = [function_set.a, function_set.b,
    function_set.c, function_set.d, function_set.e]
// console.log(func_list[0][0])

var img_list = ['img1', 'img2', 'img3', 'img4', 'img5']


for (i in func_list){
document.getElementById(img_list[i]).addEventListener(
    "mouseover", func_list[i][0]);

document.getElementById(img_list[i]).addEventListener(
     "mouseout", func_list[i][1]);
}



var score = 0;
var light_up1=false;
var light_up2=false;
var light_up3=false;
var light_up4=false;
var light_up5=false;
var click_time=0;
var block=false;
document.getElementById('block').addEventListener(
    'click', function(){
        if(click_time%2==0){
        block=true;
        console.log(block);
        click_time++;
        }else{
            block=false;
            console.log(block);
            click_time++;
        }
    }
)

setInterval(function(){
    console.log(score)
    if (block==false){
    if (score==0){
        document.getElementById('img1').className='s';
        document.getElementById('img2').className='s';
        document.getElementById('img3').className='s';
        document.getElementById('img4').className='s';
        document.getElementById('img5').className='s';
        light_up1=false;
        light_up2=false;
        light_up3=false;
        light_up4=false;
        light_up5=false;
    }
    }
},50)


// ======================div click event=================
// document.getElementById('block').addEventListener(
//     'click', function(){
//        block= true;
//        console.log(block);
//     },true
// )
// document.getElementById('block').addEventListener(
//     'mouseout', function(){
//         block= false;
//         console.log('leave block'+block);
//     },true
// )
// -----------------------------------------

// console.log(function_set.a,function_set.b);


// for (i in func_list){
//     document.getElementById(img_list[i]).addEventListener(
//         "mouseover", func_list[i] 
//     )
// }
