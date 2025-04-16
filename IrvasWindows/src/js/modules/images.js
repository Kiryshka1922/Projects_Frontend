const images = () => {
    const cover = document.querySelector('.works');
    
    const window = document.createElement('div');
    window.classList.add('popup');
    cover.appendChild(window);
    const picture = document.createElement('img');
    
    window.style.justifyContent = 'center';
    window.style.alignItems = 'center';
    window.style.display = 'none';
    
    window.appendChild(picture);

    cover.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains('preview')){
            window.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            picture.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (target && target == window && target != picture){
            window.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

};

export default images;