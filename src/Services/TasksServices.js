import DataServices from "./DataServices";

const TasksServices = {
    getAllTasks: async () => {
        const dataservices = DataServices();
        return dataservices.getAllTasks();
    },
    getTask: async (id) => {
        const dataservices = DataServices();
        return dataservices.getTask(id);
    },
    setTask: async (task) => {
        const dataservices = DataServices();
        return dataservices.setTask(task);
    },
    updateTask: async (id, task) => {
        const dataservices = DataServices();
        return dataservices.updateTask(id, task);
    },
    deleteTask: async (id) => {
        const dataservices = DataServices();
        return dataservices.deleteTask(id);
    },
};
export default TasksServices;
