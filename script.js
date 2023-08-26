function toggleMenu(){
    const menuMobile = document.getElementById("mobile")

    if(menuMobile.className === 'mobile-sidebar'){
        menuMobile.className = 'mobile-sidebar-active'
    } else{
        menuMobile.className = 'mobile-sidebar'
    }
}