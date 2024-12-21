     class Task {
         constructor(description) {
             this.description = description;
         }
     }
     
     // Creating an instance of Task
     let NewTaskInstance = new Task('Complete assignment');
     
     // Returning the instance from a function
     function createTask() {
         return NewTaskInstance;
     }
     
     let task = createTask();
     console.log(task.description); // Outputs: 'Complete assignment'
     