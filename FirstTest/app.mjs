Vue.createApp({
    data () {
        return {
            newTask: "",
            tasks: []
        }
    },
    methods: {
        addTask () {
            this.tasks.push(this.newTask);
            this.newTask = "";
        }
    }
}).mount("#app");