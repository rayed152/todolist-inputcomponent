<script lang="ts">
    interface Task {
      id: number;
      text: string;
      completed: boolean;
    }
  
    let tasks: Task[] = [];
    let newTask: string = '';
  
    function addTask() {
      if (newTask.trim() !== '') {
        tasks = [...tasks, { id: tasks.length + 1, text: newTask.trim(), completed: false }];
        newTask = '';
      }
    }
  
    function removeTask(id: number) {
      tasks = tasks.filter(task => task.id !== id);
    }
  
    function toggleCompleted(id: number) {
      tasks = tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    }
  </script>
  
  <div class="flex items-center justify-center h-screen">
    <div class="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-md">
      
      <h1 class="text-2xl font-semibold mb-4">To-Do List</h1>
      <p>Check out <a href="/input"> <b>Input</b></a></p>
      <p>Check out <a href="/about"> <b>About Us</b></a></p>
      <div class="flex mb-4">
        <input type="text" class="flex-grow border-2 border-gray-300 rounded-lg px-4 py-2 mr-2" bind:value={newTask} placeholder="Enter a new task" />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg" on:click={addTask}>Add Task</button>
      </div>
      
      <ul>
        {#each tasks as task (task.id)}
          <li class="flex items-center justify-between bg-white rounded-lg shadow-sm mb-2 p-4" class:line-through={task.completed}>
            <span>{task.text}</span>
            <div>
              <button class="text-blue-500 mr-2" on:click={() => toggleCompleted(task.id)}>{task.completed ? 'Undo' : 'Completed'}</button>
              <button class="text-red-500" on:click={() => removeTask(task.id)}>Remove</button>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  