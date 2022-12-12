const blockObserver = () => {
    window.onload = () => {
        const options = {
            root: null,
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target;

                    targetElement.classList.add("_show");
                    observer.unobserve(targetElement);
                }
            });
        }, options);

        const observableElements = document.querySelectorAll("[data-name='observable-element']");
        observableElements.forEach((element) => {
            observer.observe(element);
        });
    };
};

export default blockObserver;
