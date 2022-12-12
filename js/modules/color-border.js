// add color border to parent block ".section__block-item"

const colorBorder = () => {
    const button = document.querySelectorAll(".button--plan");

    button.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
            btn.parentElement.classList.add("_color-border");
        });
    });

    button.forEach((btn) => {
        btn.addEventListener("mouseout", () => {
            btn.parentElement.classList.remove("_color-border");
        });
    });
};

export default colorBorder;
