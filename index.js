const prompt = require("prompt-sync")();

let tasks = [
  {
    id: crypto.randomUUID(),
    description: "Apprendre JavaScript",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    description: "learn react",
    isDone: true,
  },
];

const displayTasks = () => {
  tasks.forEach((task) => console.table(task));
};

// displayTasks();
const addTask = (title, description, status) => {
  const newTask = {
    id: crypto.randomUUID(),
    title: prompt("enter task title : "),
    description: prompt("enter task description : "),
    isDone:
      prompt('enter task status ("Terminée" | "En attente" ) : ')
        .toLowerCase()
        .trim() === "terminee",
  };

  tasks.push(newTask);
};
// addTask();

// displayTasks();
const findTask = () => {
  const title = prompt("enter task title : ");
  const foundTasks = tasks.filter((task) => task.title === title);

  if (!foundTasks) {
    console.log("task not found !");
  } else {
    foundTasks.forEach((task) => console.table(task));
  }
};

const editTask = () => {
  const id = prompt("enter task id : ");
  tasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          description: prompt("enter a new description for this taks : "),
        }
      : task
  );
};
const removeTask = () => {
  const id = prompt("enter task id : ");
  tasks = tasks.filter((task) => task.id !== id);
};
const changeTaskStatus = () => {
  const id = prompt("enter task id : ");
  tasks = tasks.map((task) =>
    task.id == id
      ? {
          ...task,
          isDone:
            prompt('enter task status ("Terminee" | "En attente" ) : ')
              .toLowerCase()
              .trim() === "terminee",
        }
      : task
  );
};
const getTasksByStatus = () => {
  const doneTasks = tasks.filter((task) => task.isDone);
  const otherTasks = tasks.filter((task) => !task.isDone);

  const status =
    prompt("enter tasks status : ").toLocaleLowerCase().trim() === "terminee";

  if (status) {
    doneTasks.forEach((task) => console.table(task));
  } else {
    otherTasks.forEach((task) => console.table(task));
  }
};

const menu = `
            === To-Do List ===

        1. Afficher les tâches
        2. Ajouter une tâche
        3. Rechercher une tâche
        4. Modifier une tâche
        5. Supprimer une tâche
        6. Marquer une tâche comme terminée
        7. Afficher tâches terminées / en attente
        0. Quitter
`;

while (true) {
  console.log(menu);
  const option = Number(prompt("Choisissez une option : "));
  if (option === 0) {
    break;
  }

  switch (option) {
    case 1:
      displayTasks();
      break;
    case 2:
      addTask();
      break;
    case 3:
      findTask();
      break;
    case 4:
      editTask();
      break;
    case 5:
      removeTask();
      break;
    case 6:
      changeTaskStatus();
      break;
    case 7:
      getTasksByStatus();
      break;

    default:
      console.log("invalid option  !");

      break;
  }
}
