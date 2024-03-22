// Menu 
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click",()=>{
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false)
    }
});

// Resume Button Animation 
const resume_text = document.querySelector(".resume-text");
resume_text.innerHTML = resume_text.textContent.replace(/\S/g,"<span>$&</span>");

const element = document.querySelectorAll(".resume-text span");
for(let i=0; i<element.length; i++){
    element[i].style.transform = "rotate("+i*11.2+"deg)"
}

// Project pop-up animation
var $cursor = $(".cursor");
$overlay = $(".project-overlay");

function moveCircle(e){
    TweenLite.to($cursor, 0.5, {
        css:{
            left: e.pageX,
            top: e.pageY
        },
        delay: 0.03
    });
}

$(".project-0").hover(function(){
    $(".cursor").css({"background-image": "url('images/project-1.png')","width":"110px","height":"160px"});
});

$(".project-1").hover(function(){
    $(".cursor").css({"background-image": "url('images/project-2.png')","width":"110px","height":"160px"});
});

$(".project-2").hover(function(){
    $(".cursor").css({"background-image": "url('images/2_meanqt.png')","width":"110px","height":"160px"});
});

$(".project-3").hover(function(){
    $(".cursor").css({"background-image": "url('images/headphone3.png')","width":"110px","height":"150px"});
});

var flag = false;
$($overlay).mousemove(function() {
    flag = true;
    TweenLite.to($cursor, 0.3, {scale: 1, autoAlpha: 1});
    $($overlay).on("mousemove",moveCircle);
});

$($overlay).mouseout(function(){
    flag = false;
    TweenLite.to($cursor, 0.3, {scale: 0.1, autoAlpha: 0});
});

// Download 
// function downloadResume() {
//     // URL to your resume file
//     const resumeUrl = 'images/Aswindev3.pdf';

//     // Fetching the resume file
//     fetch(resumeUrl)
//         .then(response => response.blob())
//         .then(blob => {
//             // Creating a download link
//             const link = document.createElement('a');
//             link.href = window.URL.createObjectURL(blob);

//             // Setting the file name (you can adjust the name based on the file type)
//             link.download = 'images/Aswindev3.pdf';

//             // Appending the link to the body
//             document.body.appendChild(link);

//             // Triggering the click event
//             link.click();

//             // Removing the link from the body
//             document.body.removeChild(link);
//         })
//         .catch(error => console.error('Error fetching the resume:', error));
// }

// ScrollReveal 

