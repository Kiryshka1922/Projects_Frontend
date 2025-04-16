import checkInputs from "./checkInputs";

const form = (state) => {
    const forms = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        windows = document.querySelectorAll('[data-modal]');


    checkInputs('input[name="user_phone"]')

    const Message = {
        loading: "Загрузка ...",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так ..."
    } 
    const PostData = async (url, data) => {
        document.querySelector(".status").textContent = Message.loading;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Важно для JSON!
            },
            body: data
        });

        return await res.json();
    }

    const clearInputs = () => {
        input.forEach((item) => {
            item.value = '';
        })
    }

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            windows.forEach(item => {
                item.style.display = 'none';
            })

            let statusMessage = document.createElement('div');
            statusMessage.classList.add("status");
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            const data = Object.fromEntries(formData);

            if (item.getAttribute('data-calc') === "end"){
                for (const [key, value] of Object.entries(state)){
                    data[key] = value;
                }
            }

            state = {};

            PostData('http://localhost:3000/api/data', JSON.stringify(data))
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = Message.success;
                })
                .catch(error => {
                    statusMessage.textContent = Message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => { statusMessage.remove(); }, 3000)
                })


        })
    })

}

export default form;