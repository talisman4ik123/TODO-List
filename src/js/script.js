(() => {

    const svgIcons = {
        delSvg: `<?xml version="1.0" encoding="iso-8859-1"?>
        <svg class="todo-app__btn-delete-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
        <g id="XMLID_6_">
            <g id="XMLID_11_">
            <path 
            d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105
            C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75
                    S266.355,300,225,300z"/>
            </g>
            <g id="XMLID_18_">
            <path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45
            H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z"/>
            </g>
            <g id="XMLID_23_">
            <path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0
            c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213
            c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606
            c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225
            l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z"/>
            </g>
        </svg>`,

        completeSvg: `<svg class="todo-app__btn-complete-svg" fill="#000000" 
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" 
        height="64px"><path d="M27 55L6 33 9 29 26 41 55 12 59 16z"/></svg>`,

        restoreSvg: `<svg class="todo-app__btn-restore-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1,12A11,11,0,0,1,17.882,2.7l1.411-1.41A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707l1.128-1.128A8.994,8.994,0,0,0,3,12a1,1,0,0,1-2,0Zm21-1a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9,8.9,8.9,0,0,1-4.42-1.166l1.127-1.127A1,1,0,0,0,8,17H4a1,1,0,0,0-1,1v4a1,1,0,0,0,.617.924A.987.987,0,0,0,4,23a1,1,0,0,0,.707-.293L6.118,21.3A10.891,10.891,0,0,0,12,23,11.013,11.013,0,0,0,23,12,1,1,0,0,0,22,11Z"/></svg>`,

        downArrowSvg: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!DOCTYPE svg>
        <svg class="todo-app-form__svg-arrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="123.97px" height="123.97px" viewBox="0 0 123.97 123.97" style="enable-background:new 0 0 123.97 123.97;"
            xml:space="preserve">
        <g>
            <path d="M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3
                c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5
                c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z"/>
        </g>
        </svg>`
    };

    function createTitle(wrapper, title) {
        const h1 = document.createElement("h1");
        h1.classList.add("todo__title");
        h1.textContent = title;
        wrapper.append(h1);
    }

    function createSelect() {
        const filterWrapper = document.createElement("div");
        filterWrapper.classList.add("todo-form__filter-wrapper");

        const filterList = document.createElement("ul");
        filterList.classList.add("todo-form__filter-list");

        const filterItems = [
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li")
        ];
        filterItems[0].textContent = "активные";
        filterItems[1].textContent = "завершенные";
        filterItems[2].textContent = "удаленные";

        for (let i = 0; i < filterItems.length; i++) {
            filterItems[i].classList.add("todo-form__filter-item");
            filterItems[i].setAttribute("order-attr", i);
            filterItems[i].style.order = i;
            filterList.append(filterItems[i]);
        }

        filterItems[0].classList.add("todo-form__filter-item--active");

        filterWrapper.append(filterList);
        filterWrapper.innerHTML += svgIcons.downArrowSvg;

        filterWrapper.addEventListener("click", () => {
            filterWrapper.classList.toggle("todo-form__filter-wrapper--active");
        });

        return filterWrapper;
    }

    function createForm(todo) {
        const form = document.createElement("form");
        form.classList.add("todo-form");

        const input = document.createElement("input");
        input.classList.add("todo-form__input");
        input.placeholder = "Введите новое дело:";
        form.append(input);

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("todo-form__btn-group");

        const addBtn = document.createElement("button");
        addBtn.classList.add("todo-form__btn");
        addBtn.textContent = "Добавить";
        addBtn.setAttribute("type", "submit");
        btnGroup.append(addBtn);

        const filterWrapper = createSelect();
        btnGroup.append(filterWrapper);

        form.append(btnGroup);
        todo.append(form);
        return { form, input, filterWrapper };
    }


    function createItem(list, inputValue, svg1, svg2) {
        const item = document.createElement("li");
        item.classList.add("todo__item");

        const itemText = document.createElement("p");
        itemText.classList.add("todo__text");
        itemText.textContent = inputValue;
        item.append(itemText);

        const btn1 = document.createElement("button");
        btn1.classList.add("todo__btn");
        btn1.innerHTML = svg1;
        item.append(btn1);

        const btn2 = document.createElement("button");
        btn2.classList.add("todo__btn");
        btn2.innerHTML = svg2;
        item.append(btn2);
        list.append(item);

        return { btn1, btn2, item, list };
    }


    function createList(inputValue, todo, currentList, svg1, svg2) {
        if (todo.querySelector(`.${currentList}`) == null) {
            const list = document.createElement("ul");
            list.classList.add(currentList);
            const itemComponents = createItem(list, inputValue, svg1, svg2);
            todo.append(list);
            return itemComponents;
        } else {
            const list = todo.querySelector(`.${currentList}`);
            const items = list.querySelectorAll(".todo__item");
            let count = 0;
            items.forEach(item => {
                if (item.querySelector(".todo__text").textContent == inputValue) {
                    count++;
                }
            });
            if (count === 0) {
                const itemComponents = createItem(list, inputValue, svg1, svg2);
                return itemComponents;
            } else {
                return -1;
            }
        }
    }

    function createCompleteList(text, todo, className) {
        const itemComponents = createList(text, todo, className, svgIcons.restoreSvg, svgIcons.delSvg);

        if (itemComponents !== -1) {
            itemComponents.btn1.addEventListener("click", () => {
                const itemText = itemComponents.item.querySelector(".todo__text").textContent;
                createActiveList(itemText, todo, "todo-active__list");
                itemComponents.item.parentNode.removeChild(itemComponents.item);
            });

            itemComponents.btn2.addEventListener("click", () => {
                const itemText = itemComponents.item.querySelector(".todo__text").textContent;
                createDeleteList(itemText, todo, "todo-delete__list");
                itemComponents.item.parentNode.removeChild(itemComponents.item);
            });
        }
    }

    function createDeleteList(text, todo, className) {
        const itemComponents = createList(text, todo, className, svgIcons.restoreSvg, svgIcons.delSvg);

        if (itemComponents !== -1) {
            itemComponents.btn1.addEventListener("click", () => {
                const itemText = itemComponents.item.querySelector(".todo__text").textContent;
                createActiveList(itemText, todo, "todo-active__list");
                itemComponents.item.parentNode.removeChild(itemComponents.item);
            });

            itemComponents.btn2.addEventListener("click", () => {
                itemComponents.item.parentNode.removeChild(itemComponents.item);
            });
        }
    }

    function createActiveList(text, todo, className) {
        const itemComponents = createList(text, todo, className, svgIcons.completeSvg, svgIcons.delSvg);

        if (itemComponents !== -1) {
            itemComponents.btn1.addEventListener("click", () => {
                const itemText = itemComponents.item.querySelector(".todo__text").textContent;
                createCompleteList(itemText, todo, "todo-complete__list");
                itemComponents.item.parentNode.removeChild(itemComponents.item);
            });

            itemComponents.btn2.addEventListener("click", () => {
                const itemText = itemComponents.item.querySelector(".todo__text").textContent;
                createDeleteList(itemText, todo, "todo-delete__list");
                itemComponents.item.parentNode.removeChild(itemComponents.item);
            });
        }
    }

    function settingFilters(todo) {
        let filterItems = getfilterItems(todo);
        let activeFilterItems = filterItems[0];

        for (let i = 0; i < filterItems.length; i++) {
            filterItems[i].addEventListener("click", () => {
                const clickItemAttr = filterItems[i].getAttribute("order-attr");
                const activeItem = todo.querySelector(`.todo-form__filter-item--active`);
                activeItem.setAttribute("order-attr", clickItemAttr);
                activeItem.style.order = clickItemAttr;
                activeItem.classList.remove(`todo-form__filter-item--active`);
                filterItems[i].setAttribute("order-attr", 0);
                filterItems[i].style.order = 0;
                filterItems[i].classList.add(`todo-form__filter-item--active`);
                if (filterItems[i].getAttribute("order-attr") == 0) {
                    activeFilterItems = filterItems[i];
                }
            });
        }
    }

    function getfilterItems(todo) {
        const filterList = todo.querySelector(".todo-form__filter-list");

        const filterItems = filterList.querySelectorAll(".todo-form__filter-item");

        filterItems.forEach(item => {
            item.addEventListener("click", () => {
                if (item.textContent == "завершенные") {
                    if (todo.querySelector(".todo-active__list") != null) {
                        todo.querySelector(".todo-active__list").classList.add("todo-active__list--close");
                    }
                    if (todo.querySelector(".todo-delete__list--active") != null) {
                        todo.querySelector(".todo-delete__list--active").classList.remove("todo-delete__list--active");
                    }

                    if (todo.querySelector(".todo-complete__list") != null) {
                        todo.querySelector(".todo-complete__list").classList.add("todo-complete__list--active");
                    }
                }

                if (item.textContent == "активные") {
                    if (todo.querySelector(".todo-complete__list--active") != null) {
                        todo.querySelector(".todo-complete__list--active").classList.remove("todo-complete__list--active");
                    }
                    if (todo.querySelector(".todo-delete__list--active") != null) {
                        todo.querySelector(".todo-delete__list--active").classList.remove("todo-delete__list--active");
                    }

                    if (todo.querySelector(".todo-active__list--close") != null) {
                        todo.querySelector(".todo-active__list--close").classList.remove("todo-active__list--close");
                    }
                }

                if (item.textContent == "удаленные") {
                    if (todo.querySelector(".todo-complete__list--active") != null) {
                        todo.querySelector(".todo-complete__list--active").classList.remove("todo-complete__list--active");
                    }
                    if (todo.querySelector(".todo-active__list") != null) {
                        todo.querySelector(".todo-active__list").classList.add("todo-active__list--close");
                    }

                    if (todo.querySelector(".todo-delete__list") != null) {
                        todo.querySelector(".todo-delete__list").classList.add("todo-delete__list--active");
                    }
                }
            });
        });
        return filterItems;
    }

    function selectActiveGroup(todo) {
        if (todo.querySelector(".todo-complete__list--active") != null) {
            todo.querySelector(".todo-complete__list--active").classList.remove("todo-complete__list--active");
        }
        if (todo.querySelector(".todo-delete__list--active") != null) {
            todo.querySelector(".todo-delete__list--active").classList.remove("todo-delete__list--active");
        }
        if (todo.querySelector(".todo-active__list--close") != null) {
            todo.querySelector(".todo-active__list--close").classList.remove("todo-active__list--close");
        }
        const items = todo.querySelectorAll(".todo-form__filter-item");
        let atr = 0;
        if (todo.querySelector(".todo-form__filter-item--active").textContent != "активные") {
            items.forEach(item => {
                if (item.textContent == "активные") {
                    atr = item.getAttribute("order-attr");
                }
            });
            todo.querySelector(".todo-form__filter-item--active").setAttribute("order-attr", atr);
            todo.querySelector(".todo-form__filter-item--active").style.order = atr;
            todo.querySelector(".todo-form__filter-item--active").classList.remove("todo-form__filter-item--active");

            items.forEach(item => {
                if (item.textContent == "активные") {
                    item.setAttribute("order-attr", 0);
                    item.style.order = 0;
                    item.classList.add("todo-form__filter-item--active");
                }
            });
        }
    }

    function createTodoList(wrapper, title) {
        const todo = document.getElementById(wrapper);
        createTitle(todo, title);
        const formItems = createForm(todo);

        formItems.form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (formItems.input.value != "") {
                createActiveList(formItems.input.value, todo, "todo-active__list");
                selectActiveGroup(todo);
                formItems.input.value = "";
            }
        });

        settingFilters(todo);
    }


    document.addEventListener('DOMContentLoaded', function () {
        createTodoList("my-list", "Мой список дел");
        createTodoList("dad-list", "Cписок дел папы");
    });
})();