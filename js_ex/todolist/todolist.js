var todos = [];

function printTasks(list) {
    list.forEach(function(task){
        console.log(list.indexOf(task) + ". " + task);
    })
}

window.setTimeout(function() {
    var resp = 1
    var taskIndex
    while(resp !== "quit"){
        resp = prompt("What would You like to do?");
        if(resp === "new"){
            newTodo = prompt("Add new todo")
            todos.push(newTodo);
        } else if(resp === "list"){
            console.log("*************");
            printTasks(todos);
            console.log("*************");
        } else if(resp === "delete") {
            taskIndex = Number(prompt("Which task would You like to delete (index)"));
            if(typeof(taskIndex)==="number" && taskIndex >= 0 && taskIndex < todos.length){
                todos.splice(taskIndex, 1);
            } else {
                taskIndex = prompt("ERROR!!! Type valid index (0 - "+todos.length);
            }
        }else {
            resp = prompt("Wrong command, please pass one of valid commands!")
        }
    }
}, 1000);