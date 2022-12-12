const burgerMenu = () => {
    const iconMenu = document.querySelector(".nav__icon");
    const navigation = document.querySelector(".nav__body");
    const navList = document.querySelector(".nav__list");

    iconMenu.addEventListener("click", () => {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        navigation.classList.toggle("_active");
    });

    navList.addEventListener("click", ({ target }) => {
        if (target.closest(".nav__link")) {
            document.body.classList.remove("_lock");
            iconMenu.classList.remove("_active");
            navigation.classList.remove("_active");
        } else {
            return;
        }
    });
};

export default burgerMenu;
