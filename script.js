console.log("hello");

const body = document.body;
const mainContent = document.getElementById("mainContent");
const btn = document.querySelector('input[type ="checkbox"]');
const icons = document.getElementById("icons");
const firstChild = document.getElementById("iconFirstChild");
const round = document.getElementById("round");
const root = document.querySelector(":root"); 

// toggle light and dark mode function 
function toggle(isDark){
     isDark? body.style.backgroundColor = "#000" :  body.style.backgroundColor = "#fff";
     isDark? mainContent.style.color = "#fff" :  mainContent.style.color = "#000";
     isDark?  firstChild.innerHTML = `<span id="iconfirstChild">I am dark now</span>` :     firstChild.innerHTML = `<span id="iconfirstChild">I am bright now</span>`;
     isDark? icons.lastElementChild.classList.remove("fa-sun"): icons.lastElementChild.classList.remove("fa-moon");
     isDark? icons.lastElementChild.classList.add("fa-moon"):icons.lastElementChild.classList.add("fa-sun");

}
// toggle button event listener 
btn.addEventListener("change",(e)=>{
 if(e.target.checked){
    // dark();
    localStorage.setItem("theme","dark");    
    toggle(true);
    round.style.backgroundColor = "white";
    root.style.setProperty("--pseudo-backgroundcolor", 'black'); 
 }
 else{
     localStorage.setItem("theme","light");
    toggle(false);
    round.style.backgroundColor = "black";
    root.style.setProperty("--pseudo-backgroundcolor", 'white');
 }
});

// getting and setting dark as default 
const currTheme = localStorage.getItem("theme");
if(currTheme){
    document.documentElement.setAttribute("theme",toggle(true));
    btn.checked = true;
    round.style.backgroundColor = "white";
    root.style.setProperty("--pseudo-backgroundcolor", 'black'); 
}

