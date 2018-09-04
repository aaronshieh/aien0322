window.onload = function(){
    var numStars=0;
    while (numStars<5 || numStars>100 || /\D+/.test(numStars))
        numStars = prompt("how many stars do you want? (5-100)");

    var contentDiv = document.getElementsByClassName("content")[0];
    for(var i=0;i<numStars;i++){
        contentDiv.innerHTML += '<img id="star'+i+'" class="inactive star" src="../images/star.jpg">';
    }

    var stars = document.querySelectorAll("img.star");
    var starsLen = stars.length;
    for (let i=0;i<starsLen;i++) {
        stars[i].addEventListener("mouseover", mouseOver);
        stars[i].addEventListener("click", mouseClick);
        stars[i].addEventListener("mouseout", mouseOut);
    }
    document.getElementById("rating").innerHTML="No rating";

    var rated = false;
    var ratingText = document.getElementById("rating");

    function reset(){
        for (i=0;i<starsLen;i++) {
            stars[i].className="inactive star";
        }
        ratingText.innerHTML="No rating";
    }

    function mouseOut(){
        if (!rated) {
            reset();
        }
    }

    function mouseOver(){
        var id = this.id.substr(4);
        if (!rated) {
            for (i=0;i<starsLen;i++) {
                if(i<=id)
                    stars[i].className="active star";
                else 
                    stars[i].className="inactive star";
            }
            (id==0) ? ratingText.innerHTML = (parseInt(id)+1) + " star" : 
                ratingText.innerHTML = (parseInt(id)+1) + " stars";
        }
    }

    function mouseClick(){
        var id = this.id.substr(4);
        if (!rated) {
            for (i=0;i<id;i++) {
                stars[i].className="active star";
            }
            rated = true;
            (id==0) ? ratingText.innerHTML = "Rating of " + (parseInt(id)+1) + " star" :
                ratingText.innerHTML = "Rating of " + (parseInt(id)+1) + " stars";
        }
    }

    document.getElementById("resetBtn").addEventListener("click",
        function(){
            rated = false;
            reset();
        });
}