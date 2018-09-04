

// ============change big picture and small border===================

var count = 0;
var pic_list = ['ad1', 'ad2', 'ad3', 'ad4', 'ad5',]
var pic_small_list = ['sad1','sad2','sad3','sad4','sad5']
var control_play =false;
var play_big= setInterval(start,1000)

function start(){
    if (control_play==false){
    count++;
    // if (count<=4)
        document.getElementById(pic_list[count-1]).className='none';
        document.getElementById(pic_small_list[count-1]).className='ads';
    if (count >=5)
        count=0;
    document.getElementById(pic_list[count]).className='block'
    document.getElementById(pic_small_list[count]).className='adsborder';
    
//     if (count==0){
//     document.getElementById(pic_list[4]).className='none';
//     document.getElementById(pic_small_list[4]).className='ads';
// }

    console.log(count);
}
}


document.getElementById('idpauseplay').addEventListener(
    'click', function(){
        if (control_play==false){
        clearInterval(play_big)
        this.src='../images/play.png'
        control_play=true
        console.log('stop',control_play)
    }else{
        control_play=false;
        play_big= setInterval(start,1000)
        console.log('play',control_play)
        this.src='../images/pause.png'
    }
    }
)


// document.getElementById('ad1').className='none'
// document.getElementById('ad2').className='block'
// document.getElementById('ad3').className
// document.getElementById('ad4').className
// document.getElementById('ad5').className
// ============change big picture and small border  end===================

// ========================= next and back====================================

document.getElementById('idnext').addEventListener(
    'click', function(){
        count ++

        document.getElementById(pic_list[count-1]).className='none';
        document.getElementById(pic_small_list[count-1]).className='ads';
        if (count >=5)
            count=0;
        document.getElementById(pic_list[count]).className='block'
        document.getElementById(pic_small_list[count]).className='adsborder';
        
    //     if (count==0){
    //     document.getElementById(pic_list[4]).className='none';
    //     document.getElementById(pic_small_list[4]).className='ads';
        
    // }
        console.log(count);
    }
)


document.getElementById('idback').addEventListener(
    'click', function(){
        count--;

        document.getElementById(pic_list[count+1]).className='none';
        document.getElementById(pic_small_list[count+1]).className='ads';
        if (count <0)
            count=4;
        document.getElementById(pic_list[count]).className='block'
        document.getElementById(pic_small_list[count]).className='adsborder';
        
    //     if (count==5){
    //     document.getElementById(pic_list[0]).className='none';
    //     document.getElementById(pic_small_list[0]).className='ads'; 
    // }
        console.log(count);
    }
)


// ===============change button color================

var but_list = ['idnext', 'idback', 'idpauseplay']

for (i in but_list){
    document.getElementById(but_list[i]).addEventListener(
        'mouseover', function(){
            this.style.webkitFilter='grayscale(0.4)';
        });
    document.getElementById(but_list[i]).addEventListener(
    'mouseout', function(){
        this.style.webkitFilter='grayscale(1)';
    });
}



// document.getElementById('idnext').addEventListener(
//     'mouseover', function(){
//         this.style.webkitFilter='grayscale(0.4)';
//     });

// document.getElementById('idnext').addEventListener(
//     'mouseout', function(){
//         this.style.webkitFilter='grayscale(1)';
//     });

// document.getElementById('idback').addEventListener(
//     'mouseover', function(){
//         this.style.webkitFilter='grayscale(0.4)';
//     });

// document.getElementById('idback').addEventListener(
//     'mouseout', function(){
//         this.style.webkitFilter='grayscale(1)';
//     });

// document.getElementById('idpauseplay').addEventListener(
//     'mouseover', function(){
//         this.style.webkitFilter='grayscale(0.4)';
//     });

// document.getElementById('idpauseplay').addEventListener(
//     'mouseout', function(){
//         this.style.webkitFilter='grayscale(1)';
//     });
