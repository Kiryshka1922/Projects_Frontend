
const tabs = (headerSelector, itemSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(itemSelector),
        content = document.querySelectorAll(contentSelector);
    
    function hideContent(){
        content.forEach(item => {
            item.style.display = 'none';
        })

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    function showContent (i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass);    
    }

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (e.target || target.classList.contains(itemSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(itemSelector.replace(/\./, '')) ){
                tabs.forEach((item, i) => {
                    if (target == item || target.parentNode == item){
                        hideContent();
                        showContent(i);
                    }
                })
            }
    })

    hideContent();
    showContent();
}

export default tabs;