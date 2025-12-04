// script.js - Interactive features for Selena Bista CV

// Typing Animation for Name
const nameElement = document.getElementById('typed-name');
const fullName = 'Selena Bista';
let index = 0;
function typeName(){
    if(index < fullName.length){
        nameElement.textContent += fullName.charAt(index);
        index++;
        setTimeout(typeName, 150);
    }
}
nameElement.textContent = '';
typeName();

// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Animate Progress Bars
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress-bar');
    skills.forEach(bar => {
        const barPos = bar.getBoundingClientRect().top;
        const screenPos = window.innerHeight;
        if(barPos < screenPos){
            bar.style.width = bar.getAttribute('data-progress');
        }
    });
});

// Show/Hide More Info
const toggleInfoBtn = document.getElementById('toggle-info');
const moreInfoDiv = document.getElementById('more-info');
toggleInfoBtn.addEventListener('click', () => {
    if(moreInfoDiv.style.display === 'none'){
        moreInfoDiv.style.display = 'block';
        toggleInfoBtn.textContent = 'Hide Info';
    } else {
        moreInfoDiv.style.display = 'none';
        toggleInfoBtn.textContent = 'Show More Info';
    }
});

// Scroll-To-Top Button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Download CV Button (simulated download)
const downloadBtn = document.getElementById('download-cv');
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Selena_Bista_CV.pdf'; // replace with actual PDF path if available
    link.download = 'Selena_Bista_CV.pdf';
    link.click();
});
