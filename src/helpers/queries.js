const URITasks = import.meta.env.VITE_API_TASK;

export const createTaskAPI = async (task) => {
  try {
    const answer = await fetch(URITasks, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const readTasksAPI = async () => {
  try {
    const answer = await fetch(URITasks);
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const obtainTaskAPI = async (id) => {
  try {
    const answer = await fetch(`${URITasks}/${id}`);
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const dltTaskAPI = async (id) => {
  try {
    const answer = await fetch(`${URITasks}/${id}`, {
      method: "DELETE",
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const editTaskAPI = async (task, id) => {
  try {
    const answer = await fetch(`${URITasks}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};
