const initApp=()=>{
    const hamBurgerBtn=document.getElementById('hamburger-button');

    const mobileMenu=document.getElementById('mobile-menu');


    const toggleMenu=()=>{
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamBurgerBtn.classList.toggle('toggle-btn');

        

    }

    hamBurgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener ('click', toggleMenu)
}
document.addEventListener('DOMContentLoaded', initApp);