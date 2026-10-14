const tasks = [
  {
    id: 1,
    title: "Revisar o artigo ACM Survey",
    completed: false,
    date: "15/10/2026",
    completionDate: null
  },
  {
    id: 2,
    title: "Preparar material para o curso TDS",
    completed: true,
    date: "12/10/2026",
    completionDate: "10/10/2026"
  },
  {
    id: 3,
    title: "Preparar apresentação da palestra BBDW",
    completed: false,
    date: "15/10/2026",
    completionDate: null
  }
];

function searchTasks(searchTerm, taskList = tasks) {
  if (typeof searchTerm !== "string") {
    return [];
  }

  const normalizedTerm = searchTerm.toLowerCase();
  return taskList.filter((task) => task.title.toLowerCase().includes(normalizedTerm));
}

module.exports = { tasks, searchTasks };