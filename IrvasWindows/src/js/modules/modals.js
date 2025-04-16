
const modals = function (buttonsClick, modalWindow, closeButton, closeClickOverLay = true ) {
    const callEngineerButtons = document.querySelectorAll(buttonsClick),
        modalEngineer = document.querySelector(modalWindow),
        modalEngineerClose = document.querySelector(closeButton),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScrool();

    let ID;
    if (modalWindow === ".popup"){
        ID = setTimeout(() => {
            document.body.style.overflow = 'hidden';
            modalEngineer.style.display = 'block';
        },3000)
    }

    callEngineerButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target) e.preventDefault();

            windows.forEach(item => {
                item.style.display = 'none';
            })

            document.body.style.overflow = 'hidden';
            modalEngineer.style.display = 'block';
            document.body.style.marginRight = `${scroll}px`;

            if (buttonsClick === '.phone_link'){
                if (ID) clearTimeout(ID);
            }
        })
    });

    modalEngineerClose.addEventListener("click", () => {
        windows.forEach(item => {
            item.style.display = 'none';
        })

        document.body.style.overflow = 'visible';
        document.body.style.marginRight = `0px`;
        // document.body.classList.add("className"); Alternative variant
        modalEngineer.style.display = 'none';
    })

    modalEngineer.addEventListener('click', (e) => {
        if (e.target && e.target === modalEngineer && closeClickOverLay){
            windows.forEach(item => {
                item.style.display = 'none';
            })

            document.body.style.overflow = 'visible';
            modalEngineer.style.display = 'none';
            document.body.style.marginRight = `0px`;

        }
    })

    function calcScrool (){
        let div = document.createElement ('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        div.style.overflowY = 'scroll';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        return scrollWidth;
    }
}




export default modals;