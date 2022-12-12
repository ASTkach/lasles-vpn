const fixedHeader = () => {
    window.onscroll = () => {
        const header = document.querySelector(".header");
        const pageWrapper = document.querySelector(".wrapper");
        const headerHeight = header.scrollHeight;

        if (window.scrollY > 0) {
            header.classList.add("_fixed");
            pageWrapper.style.paddingTop = headerHeight + "px";
        } else {
            header.classList.remove("_fixed");
            pageWrapper.style.paddingTop = null;
        }
    };
};

export default fixedHeader;
