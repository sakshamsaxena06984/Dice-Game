// image 1 --  section
var randomnumber1=Math.floor(Math.random()*6)+1;//it is random number which range between 1 to 6(including)
var sourceimage1="images/dice"+randomnumber1+".png";//it is the source image 

document.querySelectorAll("img")[0].setAttribute("src",sourceimage1);//set the image according to the situation

//image 2 --  section
var randomnumber2=Math.floor(Math.random()*6)+1;
var sourceimgae2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",sourceimgae2);

if(randomnumber1>randomnumber2)
{
    // if randomnumber1 is greater than randomnumber2
    document.querySelector("h1").innerHTML="Player 1 win! 🎇";
}
else if(randomnumber2>randomnumber1)
{
    // if randomnumber1 is lesser than randomnumber2
    document.querySelector("h1").innerHTML="🎇 Player 2 win!";
}
else{
    // if randomnumber2 is equal to randomnumber1
    document.querySelector("h1").innerHTML="Draw!";
}