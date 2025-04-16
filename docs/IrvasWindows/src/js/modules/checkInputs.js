const checkInputs = (selector) => {
    const Selectors = document.querySelectorAll(selector);

    Selectors.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        })
    })
}

export default checkInputs;