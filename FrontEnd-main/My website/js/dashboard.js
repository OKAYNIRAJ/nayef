const  sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');



menuBtn.addEventListener('click',()=>{
       sideMenu.style.display = "block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click',()=>{
     document.body.classList.toggle('dark-theme-variables')
     themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
     themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})


// Hover
// Get all sidebar links
// const sidebarLinks = document.querySelectorAll('.sidebar a');

// // Function to remove 'active' class from all links and add it to the clicked link
// function setActiveLink(event) {
//     // Prevent the default behavior of links (optional if using anchor tags for navigation)
//     event.preventDefault();
    
//     // Remove 'active' class from all links
//     sidebarLinks.forEach(link => link.classList.remove('active'));
    
//     // Add 'active' class to the clicked link
//     event.currentTarget.classList.add('active');
// }

// // Add click event listener to all sidebar links
// sidebarLinks.forEach(link => {
//     link.addEventListener('click', setActiveLink);
// });
// Get all sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar a');

// Function to remove 'active' class from all links and add it to the clicked link
function setActiveLink(event) {
    // Remove 'active' class from all links
    sidebarLinks.forEach(link => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    event.currentTarget.classList.add('active');
    
    // Store the active link in localStorage
    localStorage.setItem('activeLink', event.currentTarget.getAttribute('href'));
}

// Add click event listener to all sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});

// On page load, set the active link from localStorage
window.addEventListener('load', () => {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === activeLink) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});



