window.addEventListener("load", navbarTransition);

function navbarTransition() {
    const navbar = document.getElementById("navbar_container");
    const kembiki_link = document.getElementById("kembiki_navbar");
    const kembiki_logo = kembiki_link.children[0];
    
    let breakpoint = window.innerHeight / 2;

    kembiki_link.style.visibility = "hidden";
    kembiki_logo.style.opacity = 0;
    window.addEventListener("scroll", function() {
        var scrollDown = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollDown >= breakpoint) {
            navbar.classList.add("navbar-filled");

            kembiki_link.style.visibility = "visible";
            kembiki_logo.style.opacity = 1;
        } else {
            if (navbar.classList.contains("navbar-filled"))
                navbar.classList.remove("navbar-filled");
            
            kembiki_link.style.visibility = "hidden";
            kembiki_logo.style.opacity = 0;
        }
    })
}