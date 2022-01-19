(function () {
    function createTodoTitle(title) {
        const h1 = document.createElement("h1");
        h1.textContent = title;
        h1.classList.add("todo-app__title");
        return h1;
    }

    function createTodoForm() {
        const form = document.createElement("form");
        form.classList.add("todo-app__form");
        const formFieldset = document.createElement("fieldset");
        formFieldset.classList.add("todo-app__fieldset");
        form.append(formFieldset);

        const formTextarea = document.createElement("textarea");
        formTextarea.classList.add("todo-app__textarea");
        formTextarea.placeholder = "Введите новое дело:";
        formTextarea.style.marginRight = "20px";
        formFieldset.append(formTextarea);

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("todo-app__btn-group");
        formFieldset.append(btnGroup);

        const addBtn = document.createElement("button");
        addBtn.classList.add("todo-app__btn-add");
        addBtn.textContent = "Добавить";
        btnGroup.append(addBtn);

        const filtersWrapper = document.createElement("div");
        filtersWrapper.classList.add("todo-app__filter-wrapper");
        btnGroup.append(filtersWrapper);

        const filters = document.createElement("ul");
        filters.classList.add("todo-app__filter-list");
        const items = [
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li")
        ];
        items[0].textContent = "активные";
        items[1].textContent = "завершенные";
        items[2].textContent = "удаленные";
        for (let item of items) {
            item.classList.add("todo-app__filter-item");
            filters.append(item);
        }
        filtersWrapper.append(filters);

        filtersWrapper.innerHTML += `<?xml version="1.0" encoding="iso-8859-1"?>
        <!DOCTYPE svg>
        <svg class="todo-app__svg-arrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="123.97px" height="123.97px" viewBox="0 0 123.97 123.97" style="enable-background:new 0 0 123.97 123.97;"
             xml:space="preserve">
        <g>
            <path d="M51.802,96.062c2.801,2.801,6.5,4.2,10.2,4.2s7.4-1.399,10.2-4.2l47.3-47.3c5.5-5.5,6.101-14.6,0.8-20.3
                c-5.6-6.1-15.1-6.3-20.899-0.5l-30.4,30.3c-3.899,3.9-10.2,3.9-14.1,0l-30.3-30.3c-5.801-5.8-15.301-5.7-20.9,0.5
                c-5.3,5.7-4.8,14.8,0.8,20.3L51.802,96.062z"/>
        </g>
        </svg>`;

        return [form, formTextarea, addBtn];
    }

    function createTodoItem(textareaValue) {
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-app__item");

        const todoItemText = document.createElement("p");
        todoItemText.classList.add("todo-app__text");
        todoItemText.textContent = textareaValue;
        todoItem.append(todoItemText);

        return todoItem;
    }

    function createTodoList(textareaValue, todoWrapper) {
        if (textareaValue != "") {
            if (document.querySelector(".todo-app__list") === null) {
                const todoList = document.createElement("ul");
                todoList.classList.add("todo-app__list");
                todoWrapper.append(todoList);

                const todoItem = createTodoItem(textareaValue);
                todoList.append(todoItem);
            } else {
                const todoList = document.querySelector(".todo-app__list");
                const todoItems = document.querySelectorAll(".todo-app__item");
                let count = 0;
                todoItems.forEach(item => {
                    if (item.querySelector(".todo-app__text").textContent == textareaValue) {
                        count++;
                    }
                });
                if (count == 0) {
                    const todoItem = createTodoItem(textareaValue);
                    todoList.append(todoItem);
                } else {
                    alert("Данная задача уже находится в списке активных задач!");
                }
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const todoWrapper = document.getElementById('todo-app');

        const todoTitle = createTodoTitle("Список дел");
        todoWrapper.append(todoTitle);

        const formElements = createTodoForm();
        const todoForm = formElements[0];
        todoWrapper.append(todoForm);
        const todoTextarea = formElements[1];
        const todoAddBtn = formElements[2];

        todoAddBtn.addEventListener("click", (e) => {
            e.preventDefault();
            createTodoList(todoTextarea.value, todoWrapper);
        });
    });
})();