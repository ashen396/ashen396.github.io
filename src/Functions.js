export function animateFirstDecoration(){
    document.documentElement.style.setProperty('--first-page-decoration-start-top',Math.floor(Math.random()*1000).toString() + 'px');
    document.documentElement.style.setProperty('--first-page-decoration-start-left',Math.floor(Math.random()*1000).toString() + 'px');
    document.documentElement.style.setProperty('--first-page-decoration-top',Math.floor(Math.random()*1000).toString() + 'px');
    document.documentElement.style.setProperty('--first-page-decoration-left',Math.floor(Math.random()*1000).toString() + 'px');
}

export function clearNavSelected(){
    const nav_selections = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
    for (let index = 0; index < 7; index++) {
        document.getElementById(nav_selections[index]).classList.remove("selected-page");
    }
}

export function runButtonClick(){
    if(startedAnimation) sleepTime = 0;
    if(startedAnimation === false) {
        while(document.getElementById("programming").childElementCount !== 0)  document.getElementById("programming").children[0].remove();
        document.getElementById('output-log').hidden = false;
        document.getElementById('run-button').hidden = true;
    };
}

var sleepTime = 10;
const timer = ms => new Promise(res => setTimeout(res, ms))
async function myPortfolioAnimation(){
    const labels = [["public class ","MyPortfolio{"], [" private String"," full_name = ","\"Gimantha Ashen Easwarage\"", ";"], [" private String"," location = ","\"Sri Lanka\"", ";"], [" private String[]"," hobbies = {", "\"Travel\"", ",", " \"Programming\"", "}", ";"], [" public String ", "returnData(){"], 
    ["   return String", ".format(", "\"Welcome to my portfolio. \\nBy now you know my name. Well that's not enough for a person to know, so I'll tell about myself. I'm %s and everyone knows me by my middle name. I live in %s and loves to %s with friends. Think I am an extrovert and love to make new friends. Love to learn new things and try new stuff. Spends most of the time %s. I think there are ups and downs in everyone's life but all you need is experience from those moments.\\n\\nWell you can find about my education, skills and more just keep scrolling.\"", ",", " full_name", ",", " location", ",", " hobbies[", "0", "].toLowerCase()", ",", " hobbies[", "1", "].toLowerCase())", ";"],
    [" }"], [" public static void ", "main(", "String[] ", "args){"],
    ["  MyPortfolio myPortfolio = ", "new ", "MyPortfolio()", ";"], ["  System.out.println(myPortfolio.returnData())", ";"], [" }"], ["}"]];

    const element = document.getElementById("programming").querySelectorAll("p");

    for (let index = 0; index < element.length; index++) {
        for (let index2 = 0; index2 < element[index].childNodes.length; index2++) {
            for (let index3 = 0; index3 < labels[index][index2].length; index3++) {
                element[index].childNodes[index2].textContent += labels[index][index2].charAt(index3);
                await timer(sleepTime);
            }
        }
    }
    startedAnimation = false;

    window.clearTimeout(timer);
    return true;
}

var secondPageAnimation = false, fifthPageAnimation = false, sixthPageAnimation = false;
var startedAnimation = false; var awaitTimer;

var timerStarted = false, projectMouseOver = false;
async function timerTick()
{
    if(timerStarted === false){
        timerStarted = true;
        for (let index = 2; index <= 5; index++) {
            awaitTimer = await timer(2000).then(clearTimeout(awaitTimer));
            if(projectMouseOver) return;
            projectSlideClick("right-project");
            if(index === 5) index = 1;
        }
    }
}

export async function setProjectMouseOver(props){
    if(props === true) {projectMouseOver = true;}
    if(props === false) {awaitTimer = await timer(5000); timerStarted = false; projectMouseOver = false; timerTick()}
    clearTimeout(awaitTimer);
}

window.onscroll = async function selectPageScroll(){
    
    const first_page_height = (document.getElementById("first-page").clientHeight - 42);
    const second_page_height = (first_page_height * 2);
    const third_page_height = (first_page_height * 3);
    const fourth_page_height = (first_page_height * 4);
    const fifth_page_height = (first_page_height * 5);
    const sixth_page_height = (first_page_height * 6);
    const seventh_page_height = (first_page_height * 7);

    //First Page
    if(window.scrollY > 0 & window.scrollY < first_page_height) {
        clearNavSelected();
        document.getElementById("first").classList.add("selected-page");
        secondPageAnimation = false;
    };

    // //Second Page
    if(window.scrollY > first_page_height & window.scrollY < second_page_height){
        clearNavSelected();
        document.getElementById("second").classList.add("selected-page");
        if(document.getElementById("programming").innerText.length <= 10){
            secondPageAnimation = true;
            if(secondPageAnimation & !startedAnimation){myPortfolioAnimation();}
        }
    };

    //Third Page
    if(window.scrollY > second_page_height & window.scrollY < third_page_height){
        clearNavSelected();
        document.getElementById("third").classList.add("selected-page");
        secondPageAnimation = false;
    };

    //Fourth Page
    if(window.scrollY > third_page_height & window.scrollY < fourth_page_height){
        clearNavSelected();
        document.getElementById("fourth").classList.add("selected-page");
        fifthPageAnimation = false;
    };

    //Fifth Page
    if(window.scrollY > fourth_page_height & window.scrollY < fifth_page_height){
        clearNavSelected();
        document.getElementById("fifth").classList.add("selected-page");
        fifthPageAnimation = true;
        if(fifthPageAnimation) document.getElementById("technical-skills").style.animationPlayState = "running";
        sixthPageAnimation = false;
    };

    //Sixth Page
    if(window.scrollY > fifth_page_height & window.scrollY < sixth_page_height){
        clearNavSelected();
        document.getElementById("sixth").classList.add("selected-page");
        if(!sixthPageAnimation) {sixthPageAnimation = true; awaitTimer = await timer(2000).then(clearTimeout(awaitTimer)); timerStarted = false; projectMouseOver = false; timerTick()}
    };

    //Seventh Page
    if(window.scrollY > sixth_page_height & window.scrollY < seventh_page_height){
        clearNavSelected();
        document.getElementById("seventh").classList.add("selected-page");
        sixthPageAnimation = false;
    }
}

export function dragSliderOver(){
    document.getElementsByClassName("inner-slider")[0].style.width = "8px";
    document.getElementsByClassName("inner-slider")[0].style.height = "80px";
}

export function dragSliderOut(props){
    document.getElementsByClassName("inner-slider")[0].style.width = "4px";
    document.getElementsByClassName("inner-slider")[0].style.height = "75px";

    if(props < 80 & props > 0){ 
        document.getElementsByClassName("inner-slider")[0].style.transform = "translateY(0px)";
    }
    if(props < 150 & props > 80){ 
        document.getElementsByClassName("inner-slider")[0].style.transform = "translateY(110px)";
    }
    if(props < 220 & props > 150){ 
        document.getElementsByClassName("inner-slider")[0].style.transform = "translateY(220px)";
    }
}

export function dragSlider(props){

    const education = ["Successfully completed GCE O/L at Lyceum International School.", 
    "Sat for Pearson Edexcel AS A/L Examination at British Council Colombo.\n Successfully completed Diploma in Information Technology with E-Commerce at Esoft on 13th March 2017", 
    "Successfully completed Diploma in Software Engineering with 3.79 GPA and currently engaged in Higher Diploma (HND) in Software Engineering at NIBM."];

    props -= 280;
    if(props > 0 & props < 220){ 
        document.getElementsByClassName("inner-slider")[0].style.transform = "translateY(" + props + "px)";

        if(props < 80 & props > 0){
            document.getElementById("year2017").classList.remove("selected-year");
            document.getElementById("year2020").classList.remove("selected-year");
            document.getElementById("year2014").classList.add("selected-year");
            document.getElementById("education").innerText = education[0];
        }

        if(props < 150 & props > 80){
            document.getElementById("year2014").classList.remove("selected-year");
            document.getElementById("year2020").classList.remove("selected-year");
            document.getElementById("year2017").classList.add("selected-year");
            document.getElementById("education").innerText = education[1];
        }

        if(props < 220 & props > 150){
            document.getElementById("year2014").classList.remove("selected-year");
            document.getElementById("year2017").classList.remove("selected-year");
            document.getElementById("year2020").classList.add("selected-year");
            document.getElementById("education").innerText = education[2];
        }
    }
}

var selectedProject = 0;
export function changeProjectEvents(props){
    var project_holder = document.getElementById("projects-image-holder").childNodes[0].childNodes[0];
    var project_holder2 = document.getElementById("projects-image-holder").childNodes[0].childNodes[1];
    var project_holder3 = document.getElementById("projects-image-holder").childNodes[0].childNodes[2];
    var isProjectHolderChildren = false, isProjectHolderChildren2 = false;

    if(document.getElementById("projects-image-holder").childNodes[0].childElementCount > 1) 
        if(project_holder2.hasChildNodes()) 
            isProjectHolderChildren = true;

    if(document.getElementById("projects-image-holder").childNodes[0].childElementCount > 2) 
        if(project_holder3.hasChildNodes()) 
            isProjectHolderChildren2 = true;

    props === "backwards" ? selectedProject-- : selectedProject++;
    if(selectedProject > 3) selectedProject = 0;

    switch (selectedProject){
        case 0:
            project_holder.childNodes[0].id = "left-project";
            project_holder.childNodes[1].id = "main-project";
            project_holder.childNodes[2].id = "right-project";
            project_holder.childNodes[3].id = null;

            if(isProjectHolderChildren){

                project_holder2.childNodes[0].id = "left-project";
                project_holder2.childNodes[1].id = "main-project";
                project_holder2.childNodes[2].id = "right-project";
                project_holder2.childNodes[3].id = null;
            }

            if(isProjectHolderChildren2){

                project_holder3.childNodes[0].id = "left-project";
                project_holder3.childNodes[1].id = "main-project";
                project_holder3.childNodes[2].id = "right-project";
                project_holder3.childNodes[3].id = null;
            }

            break;
        case 1:
            project_holder.childNodes[0].id = null;
            project_holder.childNodes[1].id = "left-project";
            project_holder.childNodes[2].id = "main-project";
            project_holder.childNodes[3].id = "right-project";

            if(isProjectHolderChildren){
                project_holder2.childNodes[0].id = null;
                project_holder2.childNodes[1].id = "left-project";
                project_holder2.childNodes[2].id = "main-project";
                project_holder2.childNodes[3].id = "right-project";
            }

            if(isProjectHolderChildren2){
                project_holder3.childNodes[0].id = null;
                project_holder3.childNodes[1].id = "left-project";
                project_holder3.childNodes[2].id = "main-project";
                project_holder3.childNodes[3].id = "right-project";
            }
            
            break;
        case 2:
            project_holder.childNodes[0].id = "right-project";
            project_holder.childNodes[1].id = null;
            project_holder.childNodes[2].id = "left-project";
            project_holder.childNodes[3].id = "main-project";

            if(isProjectHolderChildren){
                
                project_holder2.childNodes[0].id = "right-project";
                project_holder2.childNodes[1].id = null;
                project_holder2.childNodes[2].id = "left-project";
                project_holder2.childNodes[3].id = "main-project";
            }

            if(isProjectHolderChildren2){
                
                project_holder3.childNodes[0].id = "right-project";
                project_holder3.childNodes[1].id = null;
                project_holder3.childNodes[2].id = "left-project";
                project_holder3.childNodes[3].id = "main-project";
            }

            break;
        case 3:
            project_holder.childNodes[0].id = "right-project";
            project_holder.childNodes[1].id = "main-project";
            project_holder.childNodes[2].id = null;
            project_holder.childNodes[3].id = "left-project";

            if(isProjectHolderChildren){

                project_holder2.childNodes[0].id = "main-project";
                project_holder2.childNodes[1].id = "right-project";
                project_holder2.childNodes[2].id = null;
                project_holder2.childNodes[3].id = "left-project";
            }

            if(isProjectHolderChildren2){

                project_holder3.childNodes[0].id = "main-project";
                project_holder3.childNodes[1].id = "right-project";
                project_holder3.childNodes[2].id = null;
                project_holder3.childNodes[3].id = "left-project";
            }

            break;

        default:
            break;
    }
}

export function removeProjects(){
    var imageHolder = document.getElementById("projects-image-holder");

    if(imageHolder.childNodes[0].childNodes.length >= 3){
        document.getElementById("projects-image-holder").childNodes[0].childNodes[0].remove();
        document.getElementById("projects-image-holder").childNodes[0].childNodes[1].remove();
        translateValue = 0;
        document.getElementById("projects-image-holder").style.transform = "translateX(0px)";
         document.getElementById("project-slide-dot2").classList.remove("checked");
        document.getElementById("project-slide-dot3").classList.remove("checked");
        document.getElementById("project-slide-dot4").classList.remove("checked");
        document.getElementById("project-slide-dot1").classList.add("checked");
        document.documentElement.style.setProperty('--sixth-page-first-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-first-rotateY','45deg');
        document.documentElement.style.setProperty('--sixth-page-first-scale','1');
        document.documentElement.style.setProperty('--sixth-page-second-opacity','1');
        document.documentElement.style.setProperty('--sixth-page-second-rotateY','0deg');
        document.documentElement.style.setProperty('--sixth-page-second-scale','1.1');
        document.documentElement.style.setProperty('--sixth-page-third-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-third-rotateY','-45deg');
        document.documentElement.style.setProperty('--sixth-page-third-scale','1');
        document.documentElement.style.setProperty('--sixth-page-fourth-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-fourth-rotateY','45deg');
        document.documentElement.style.setProperty('--sixth-page-fourth-scale','1');
    }
}

var translateValue = 0;
export function projectSlide(props, direction){
    var imageHolder = document.getElementById("projects-image-holder");

    if(direction === "backwards"){
        translateValue -= 350;
     }else{
        translateValue += 350;
     }

    if(props === "slide-dot1"){
        imageHolder.style.transform = "translateX(-" + translateValue + "px)";
        document.getElementById("project-slide-dot2").classList.remove("checked");
        document.getElementById("project-slide-dot3").classList.remove("checked");
        document.getElementById("project-slide-dot4").classList.remove("checked");
        document.getElementById("project-slide-dot1").classList.add("checked");
        document.documentElement.style.setProperty('--sixth-page-first-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-first-rotateY','45deg');
        document.documentElement.style.setProperty('--sixth-page-first-scale','1');
        document.documentElement.style.setProperty('--sixth-page-second-opacity','1');
        document.documentElement.style.setProperty('--sixth-page-second-rotateY','0deg');
        document.documentElement.style.setProperty('--sixth-page-second-scale','1.1');
        document.documentElement.style.setProperty('--sixth-page-third-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-third-rotateY','-45deg');
        document.documentElement.style.setProperty('--sixth-page-third-scale','1');
        document.documentElement.style.setProperty('--sixth-page-fourth-opacity','0');
        document.documentElement.style.setProperty('--sixth-page-fourth-rotateY','0deg');
        document.documentElement.style.setProperty('--sixth-page-fourth-scale','1');
        removeProjects();
    }

    if(props === "slide-dot2"){
        imageHolder.style.transform = "translateX(-" + translateValue + "px)";
        document.getElementById("project-slide-dot1").classList.remove("checked");
        document.getElementById("project-slide-dot3").classList.remove("checked");
        document.getElementById("project-slide-dot4").classList.remove("checked");
        document.getElementById("project-slide-dot2").classList.add("checked");
        document.documentElement.style.setProperty('--sixth-page-first-opacity','0');
        document.documentElement.style.setProperty('--sixth-page-first-rotateY','0deg');
        document.documentElement.style.setProperty('--sixth-page-first-scale','1');
        document.documentElement.style.setProperty('--sixth-page-second-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-second-rotateY','45deg');
        document.documentElement.style.setProperty('--sixth-page-second-scale','1');
        document.documentElement.style.setProperty('--sixth-page-third-opacity','1');
        document.documentElement.style.setProperty('--sixth-page-third-rotateY','0deg');
        document.documentElement.style.setProperty('--sixth-page-third-scale','1.1');
        document.documentElement.style.setProperty('--sixth-page-fourth-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-fourth-rotateY','-45deg');
        document.documentElement.style.setProperty('--sixth-page-fourth-scale','1');

        if(direction !== "backwards"){

            var projects_image_holder = document.getElementById("projects-image-holder");
            var child = projects_image_holder.childNodes[0].childNodes[0].cloneNode(true);

            child.childNodes[0].addEventListener("click", (ev) => {projectSlideClick(ev.currentTarget.id)});
            child.childNodes[1].addEventListener("click", (ev) => {projectSlideClick(ev.currentTarget.id)});
            child.childNodes[2].addEventListener("click", (ev) => {projectSlideClick(ev.currentTarget.id)});
            child.childNodes[3].addEventListener("click", (ev) => {projectSlideClick(ev.currentTarget.id)});

            child.childNodes[0].id = "right-project";
            child.childNodes[1].id = null;
            child.childNodes[2].id = "left-project";
            child.childNodes[3].id = "main-project";
            projects_image_holder.childNodes[0].appendChild(child);
        }
    }

    if(props === "slide-dot3"){
        imageHolder.style.transform = "translateX(-" + translateValue + "px)";
        document.getElementById("project-slide-dot1").classList.remove("checked");
        document.getElementById("project-slide-dot2").classList.remove("checked");
        document.getElementById("project-slide-dot4").classList.remove("checked");
        document.getElementById("project-slide-dot3").classList.add("checked");
        document.documentElement.style.setProperty('--sixth-page-first-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-first-rotateY','-45deg');
        document.documentElement.style.setProperty('--sixth-page-first-scale','1');
        document.documentElement.style.setProperty('--sixth-page-second-opacity','0');
        document.documentElement.style.setProperty('--sixth-page-second-rotateY','deg');
        document.documentElement.style.setProperty('--sixth-page-second-scale','1');
        document.documentElement.style.setProperty('--sixth-page-third-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-third-rotateY','45deg');
        document.documentElement.style.setProperty('--sixth-page-third-scale','1');
        document.documentElement.style.setProperty('--sixth-page-fourth-opacity','1');
        document.documentElement.style.setProperty('--sixth-page-fourth-rotateY','0deg');
        document.documentElement.style.setProperty('--sixth-page-fourth-scale','1.1');
    }

    if(props === "slide-dot4"){
        imageHolder.style.transform = "translateX(-" + translateValue + "px)";
        document.getElementById("project-slide-dot1").classList.remove("checked");
        document.getElementById("project-slide-dot2").classList.remove("checked");
        document.getElementById("project-slide-dot3").classList.remove("checked");
        document.getElementById("project-slide-dot4").classList.add("checked");
        document.documentElement.style.setProperty('--sixth-page-first-opacity','1');
        document.documentElement.style.setProperty('--sixth-page-first-rotateY','0deg');
        document.documentElement.style.setProperty('--sixth-page-first-scale','1.1');
        document.documentElement.style.setProperty('--sixth-page-second-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-second-rotateY','-45deg');
        document.documentElement.style.setProperty('--sixth-page-second-scale','1');
        document.documentElement.style.setProperty('--sixth-page-third-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-third-rotateY','45deg');
        document.documentElement.style.setProperty('--sixth-page-third-scale','1');
        document.documentElement.style.setProperty('--sixth-page-fourth-opacity','0.4');
        document.documentElement.style.setProperty('--sixth-page-fourth-rotateY','45deg');
        document.documentElement.style.setProperty('--sixth-page-fourth-scale','1');
    }
    direction === "backwards" ? changeProjectEvents("backwards") : changeProjectEvents();
}

var count = 1;
export function projectSlideClick(props) {

        if(props === "left-project" & translateValue !== 0) {
            count = count - 1;
            projectSlide("slide-dot" + count,"backwards"); 
        }
        // if(props === "main-project") {alert("2 new")}
        if(props === "right-project") {
            count = count + 1;
            if(count === 5) count = 1;
            projectSlide("slide-dot" + count); 
        }
}

animateFirstDecoration();