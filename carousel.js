// let r = 1;

// let n = setInterval(function () {
//   document.getElementById("logo").style.display = "block";
//   if (r >= 4) {
//     clearInterval(n);
//     // document.getElementById("heading").style.zIndex = "10";
//   }
//   r++; // Increment after the condition check
// }, 1000); // Adjust the interval as needed (in milliseconds)



const s=setTimeout(function(){
    document.getElementById("whole").style.display="none";
    document.getElementById("logo").style.display="block";


},0);

// clearTimeout(s);


setTimeout(function(){
    clearTimeout(s);
    document.getElementById("logo").style.display="none";

    document.getElementById("whole").style.display="block";

},4000)

let currentSlide  = 1;


function goToSlide(slideNumber)
{
    document.getElementById("carousel").style.transition="1s";
    document.getElementById("carousel").style.marginLeft = -(slideNumber)*100+"%";
}


document.getElementById("next")
.addEventListener("click",function(){

    currentSlide++;
    console.log(currentSlide);
    goToSlide(currentSlide);
   

  

    if(currentSlide>4)
    {
        setTimeout(function(){
            document.getElementById("carousel").style.transition="0s";
            document.getElementById("carousel").style.marginLeft = "-100%";
            currentSlide=1;
        },1000)

    }


})

document.getElementById("prev")
.addEventListener("click",function(){

    currentSlide--;
    console.log(currentSlide);
    goToSlide(currentSlide);

    if(currentSlide==0)
    {
        setTimeout(function(){
            document.getElementById("carousel").style.transition="0s";
            document.getElementById("carousel").style.marginLeft = "-400%";
            currentSlide=4;
        },1000)

    }
    

})



setInterval(function(){

    currentSlide++;
    goToSlide(currentSlide);
    
   

    if(currentSlide>4)
    {
        setTimeout(function(){
            document.getElementById("carousel").style.transition="0s";
            document.getElementById("carousel").style.marginLeft = "-100%";
            currentSlide=1;
        },1000)

    }

},3000)

let l=["enter1","enter2","enter3","enter4","enter5","enter6","enter7","enter8"];
let x=["movie1","movie2","movie3","movie4","movie5","movie6","movie7","movie8"];
for(let i=0;i<l.length;i++){

    document.getElementById(l[i]).addEventListener('mouseover',function(){
        document.getElementById(x[i]).style.display="flex";
        document.getElementById(x[i]).style.marginTop= "0px";
        document.getElementById(x[i]).style.transition="2s";
    })
    
    document.getElementById(l[i]).addEventListener('mouseleave',function(){
        document.getElementById(x[i]).style.display="none";

    })

}




// document.addEventListener('DOMContentLoaded',function(){
//     var image1 =document.getElementById('movie1');
//     var section=document.getElementById('you');
//     image1.addEventListener('click',function(){
//         if(this.content.style.display==='none')
//         {
//             this.content.styledisplay='block';

//         }else{
//             content.style.display='none';
//         }
//     });
// });