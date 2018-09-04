window.onload = function(){
    document.getElementById('prev').addEventListener("click", prev);
    document.getElementById('play').addEventListener("click", play);
    document.getElementById('next').addEventListener("click", next);
    document.getElementById('imgMovie').addEventListener("click", gotoLink);
    for(i=1;i<=5;i++){
        document.getElementById('imgSmall'+i).addEventListener("click", goto);
    }
}

var movieID = 1
var movieLinks = ["https://www.imdb.com/title/tt1853728/?ref_=nv_sr_1",
    "https://www.imdb.com/title/tt0062622/?ref_=nv_sr_1",
    "https://www.imdb.com/title/tt0081505/?ref_=fn_al_tt_1",
    "https://www.imdb.com/title/tt0066921/?ref_=nv_sr_5",
    "https://www.imdb.com/title/tt0076759/?ref_=fn_al_tt_5"];
var playing = true;
var p = window.setInterval(next, 1500);

function gotoLink(){
    document.getElementById("imgLink").href=movieLinks[movieID-1];
}

function goto(){
    document.getElementById("imgSmall" + movieID).className="imgSmall inactive";
    id = this.id[8];
    movieID = id;
    document.getElementById("imgMovie").src="../images/movie" + movieID + ".jpg";
    document.getElementById("imgSmall" + movieID).className="imgSmall active";
}

function prev(){
    document.getElementById("imgSmall" + movieID).className="imgSmall inactive";
    if (movieID == 1){
        movieID = 5;
    } else {
        movieID--;
    }
    document.getElementById("imgMovie").src="../images/movie" + movieID + ".jpg";
    document.getElementById("imgSmall" + movieID).className="imgSmall active";
}

function play(){
    if (playing) {
        playing = false;
        document.getElementById("play").value = "play";
        window.clearInterval(p);
    } else {
        playing = true;
        document.getElementById("play").value = "pause";
        p = window.setInterval(next, 1500);
    }
}

function next(){
    document.getElementById("imgSmall" + movieID).className="imgSmall inactive";
    if (movieID == 5) {
        movieID = 1;
    } else {
        movieID++;
    }
    document.getElementById("imgMovie").src="../images/movie" + movieID + ".jpg";
    document.getElementById("imgSmall" + movieID).className="imgSmall active";
}