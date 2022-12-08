window.onload = function() {
    const navbar = document.getElementById("navbar");
    const kembiki_link = document.getElementById("kembiki_link");
    const kembiki_logo = document.getElementById("kembiki_logo");
    //const instagram_link = document.getElementById("instagram_link");
    //const instagram_logo = document.getElementById("instagram_logo");
    
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
