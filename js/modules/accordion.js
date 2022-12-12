const myAccordion = () => {
    const accordionItems = document.querySelectorAll("[data-name='accordion-button']");
    const rotateArrow = () => accordionItems.forEach((item) => item.classList.remove("_opend"));

    accordionItems.forEach((item) =>
        item.addEventListener("click", () => {
            const content = item.nextElementSibling;

            if (window.innerWidth <= 414 && content.style.maxHeight) {
                document.querySelectorAll("[data-name='accordionItem-content']").forEach((el) => (el.style.maxHeight = null));
                item.classList.remove("_opend");
            } else {
                document.querySelectorAll("[data-name='accordionItem-content']").forEach((el) => (el.style.maxHeight = null));
                content.style.maxHeight = content.scrollHeight + "px";
                rotateArrow();
                item.classList.add("_opend");
            }
        })
    );
};

export default myAccordion;
