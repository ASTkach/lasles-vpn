const blockWrap = () => {
    const blockPosition = () => {
        const navBody = document.querySelector(".nav__body");
        const headerContainer = document.querySelector(".header__container");
        const headerButtons = document.querySelector(".header__buttons");

        if (window.innerWidth <= 600) {
            navBody.append(headerButtons);
            headerButtons.style.display = "flex";
        } else {
            headerContainer.append(headerButtons);
        }
    };

    blockPosition();

    window.addEventListener("resize", () => {
        blockPosition();
    });
};

export default blockWrap;
