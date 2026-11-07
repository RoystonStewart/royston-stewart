const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
if(menuToggle&&navLinks){menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));}
const progress=document.getElementById("scrollProgress");
function updateProgress(){if(!progress)return;const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?(window.scrollY/max)*100:0)+"%";}
window.addEventListener("scroll",updateProgress,{passive:true});updateProgress();
const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});revealItems.forEach(el=>observer.observe(el));}else{revealItems.forEach(el=>el.classList.add("visible"));}
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
