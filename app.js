const app = new Vue({
    el: "#root",
    data: {
        todoList: [
            {
                text: "chiamare il dentista alle 15:00",
                isCompleted: false,
            },
            {
                text: "completare il logo",
                isCompleted: false,
            },
            {
                text: "passare in posta",
                isCompleted: false,
            },
        ],
        toDoText: "",
        doneList: [
            {
                text: "terminare gli esercizi di matematica",
                isCompleted: true,
            },
            {
                text: "continuare la review di pagina 158",
                isCompleted: true,
            },
        ],
    },
    methods: {
        addTodo: function () {
            /*  ///////////////////////////////////////////////////////// */

            if (this.toDoText.length > 0) {
                this.todoList.push(
                    /* inserisce un oggetto todo nella lista */
                    {
                        text: this.toDoText,
                        isCompleted: false,
                    }
                );

                this.toDoText = "";
            }
            /*  ///////////////////////////////////////////////////////// */
        },
        completeTodo: function (index) {
            this.todoList[index].isCompleted = true; // completa il todo
            this.doneList.push(this.todoList[index]); // spedisce il todo nella lista done
            this.todoList.splice(index, 1); // rimuove il todo dall'array
        },
    },
});
