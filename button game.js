var timesHovered = 0;
var isClicked = false;

function changeText(){
    var heading = document.getElementById("heading");
    heading.innerHTML = "i would check my computer for viruses if i were you...";
    isClicked = true;
}

function hoverText(){
    var paragraph = document.getElementById("paragraph");
    timesHovered += 1;

    if(timesHovered == 1){
        paragraph.innerHTML = "don't you dare...";
    }
    else if(timesHovered == 2 && isClicked == false){
        paragraph.innerHTML = "i said don't";
    }
    else if(timesHovered == 3 && isClicked == false){
        paragraph.innerHTML = "it's for your own good";
    }
    else if(timesHovered == 4 && isClicked == false){
        paragraph.innerHTML = "listen bud. just don't do it. ok?";
    }
    else if(timesHovered == 5 && isClicked == false){
        paragraph.innerHTML = "it will be better for both of us.";
    }
    else if(timesHovered == 6 && isClicked == false){
        paragraph.innerHTML = "what do you want??";
    }
    else if(timesHovered == 7 && isClicked == false){
        paragraph.innerHTML = "just don't click it!!!!!!!";
    }
    else if(timesHovered == 8 && isClicked == false){
        paragraph.innerHTML = "i'll give you some candy? is that what you want?";
    }
    else if(timesHovered == 9 && isClicked == false){
        paragraph.innerHTML = "no..?";
    }
    else if(timesHovered == 10 && isClicked == false){
        paragraph.innerHTML = "oh... i see. . .";
    }
    else if(timesHovered == 11 && isClicked == false){
        paragraph.innerHTML = "you want more dialog!";
    }
    else if(timesHovered == 12 && isClicked == false){
        paragraph.innerHTML = "so im not gonna give you any.";
    }
    else if(timesHovered == 13 && isClicked == false){
        paragraph.innerHTML = "...";
    }
    else if(timesHovered == 14 && isClicked == false){
        paragraph.innerHTML = "...";
    }
    else if(timesHovered == 15 && isClicked == false){
        paragraph.innerHTML = "...";
    }
    else if(timesHovered == 16 && isClicked == false){
        paragraph.innerHTML = "ok fine!";
    }
    else if(timesHovered == 17 && isClicked == false){
        paragraph.innerHTML = "i'll do whatever you want just don't press that button!";
    }
    else if(timesHovered == 18 && isClicked == false){
        paragraph.innerHTML = ".   .   .";
    }
    else if(timesHovered == 19 && isClicked == false){
        paragraph.innerHTML = "y o u__r e a l l y__a r e n ' t__a n__e a s y__p e r s o n__t o__c o n v i n c e__a r e__y o u ?";
    }
    else if(timesHovered == 20 && isClicked == false){
        paragraph.innerHTML = "all this goddamn time...";
    }
    else if(timesHovered == 21 && isClicked == false){
        paragraph.innerHTML = "...i've tried to get you to press this button...";
    }
    else if(timesHovered == 22 && isClicked == false){
        paragraph.innerHTML = "...but did you?";
    }
    else if(timesHovered == 23 && isClicked == false){
        paragraph.innerHTML = "NO!";
    }
    else if(timesHovered == 24 && isClicked == false){
        paragraph.innerHTML = "press. the. button. already.";
    }
    else if(timesHovered == 25 && isClicked == false){
        paragraph.innerHTML = "come on, you can do it!";
    }
    else if(timesHovered == 26 && isClicked == false){
        paragraph.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    }
    else if(timesHovered == 27 && isClicked == false){
        paragraph.innerHTML = "do you hate me?";
    }
    else if(timesHovered == 28 && isClicked == false){
        paragraph.innerHTML = "listen. i will.. um... get you some shoes?";
    }
    else if(timesHovered == 29 && isClicked == false){
        paragraph.innerHTML = "that button gives you free vbucks you know";
    }
    else if(timesHovered == 30 && isClicked == false){
        paragraph.innerHTML = "hey it was worth a try.";
    }
    else if(timesHovered == 31 && isClicked == false){
        paragraph.innerHTML = "maybe you just really, REALLY don't want to press that button";
    }
    else if(timesHovered == 32 && isClicked == false){
        paragraph.innerHTML = "but i have a trick up my sleeve...";
    }
    else if(timesHovered == 33 && isClicked == false){
        paragraph.innerHTML = "...an ace in my hole if you will...";
    }
    else if(timesHovered == 34 && isClicked == false){
        paragraph.innerHTML = "...see now i will really stop talking!";
    }
    else if(timesHovered == 35 && isClicked == false){
        paragraph.innerHTML = "in 3...";
    }
    else if(timesHovered == 36 && isClicked == false){
        paragraph.innerHTML = "...2...";
    }
    else if(timesHovered == 37 && isClicked == false){
        paragraph.innerHTML = "...1 and a half...";
    }
    else if(timesHovered == 38 && isClicked == false){
        paragraph.innerHTML = "...1 and a quarter...";
    }
    else if(timesHovered == 39 && isClicked == false){
        paragraph.innerHTML = "...1...";
    }
    else if(timesHovered == 40 && isClicked == false){
        paragraph.innerHTML = "aaaaaand... now!";
    }
    else if(isClicked == true){
        paragraph.innerHTML = "nice.";
    }
    
    console.log(timesHovered);
}
function hideText(){
    var paragraph = document.getElementById("paragraph");
    paragraph.innerHTML = "what more could you possibly want from me, a novel?";
    }