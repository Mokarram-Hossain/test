"use strict"

// Header Sticky
window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector(".header");
    if (header) {
        header.classList.toggle("header_sticky", scrollTop > 0);
    }
});

// Tabs 
const triggerTabList = document.querySelectorAll('#myTab .nav-link')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})


// Document mobile side bar
const docuSidebarBtn = document.querySelector(".docu-menu-btn")
const documentSidebar = document.querySelector(".document-sidebar");
if (documentSidebar != null && docuSidebarBtn != null) {
    const documentLeft = documentSidebar.querySelector(".document-left");
    const closeDocument = documentSidebar.querySelector(".close-document-menu");
    const documentOverlay = documentSidebar.querySelector(".document-overlay");
    docuSidebarBtn.addEventListener("click", () => {
        documentLeft.classList.add("show-document-left")
        documentSidebar.classList.add("show-document-sidebar")
        documentOverlay.style.display = "block"
        if (documentSidebar.classList.contains("show-document-sidebar")) {
            documentOverlay.addEventListener("click", () => {
                documentLeft.classList.remove("show-document-left")
                documentSidebar.classList.remove("show-document-sidebar")
                documentOverlay.style.display = "none"
            })
            closeDocument.addEventListener("click", () => {
                documentLeft.classList.remove("show-document-left")
                documentSidebar.classList.remove("show-document-sidebar")
                documentOverlay.style.display = "none"
            })
        }
    })
}

// mobile menu side bar
const menuBtn = document.querySelector(".bars")
const mainNav = document.querySelector(".main-nav");

if (mainNav != null) {
    const navMenu = mainNav.querySelector(".nav-menu-wrap");
    const closeSidebar = mainNav.querySelector(".close-sidebar");
    const overlay = mainNav.querySelector(".main-nav-overlay");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.add("show-menu-wrap")
        mainNav.classList.add("show-main-nav")
        overlay.style.display = "block"
        if (mainNav.classList.contains("show-main-nav")) {
            overlay.addEventListener("click", () => {
                navMenu.classList.remove("show-menu-wrap")
                mainNav.classList.remove("show-main-nav")
                overlay.style.display = "none"
            })
            closeSidebar.addEventListener("click", () => {
                navMenu.classList.remove("show-menu-wrap")
                mainNav.classList.remove("show-main-nav")
                overlay.style.display = "none"
            })
        }
    })
}

// Nice Select initialize

$(document).ready(function () {
    $("select").niceSelect();
});
