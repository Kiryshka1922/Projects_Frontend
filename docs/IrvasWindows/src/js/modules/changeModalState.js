import checkInputs from "./checkInputs";

function changeModalState(state) {
    const formWindows = document.querySelectorAll(".balcon_icons_img"),
        width = document.querySelectorAll("#width"),
        height = document.querySelectorAll("#height"),
        select = document.querySelectorAll("#view_type"),
        checkbox = document.querySelectorAll(".checkbox");

    checkInputs("#width");
    checkInputs("#height");

    state["profile"] = 'tree';

    function BindEventListener(elem, event, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i == 0 ? state[prop] = "Холодное" : state[prop] = "Горячее";
                            elem.forEach((item, j) => { if (j != i) item.checked = false; })
                        }
                        else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            })
        })
    }

    BindEventListener(formWindows, "click", "from");
    BindEventListener(width, "input", "width");
    BindEventListener(height, "input", "height");
    BindEventListener(checkbox, "change", "type");
    BindEventListener(select, "change", "profile");
}

export default changeModalState; 