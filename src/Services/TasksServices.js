import DataServices from "./DataServices";

const TasksServices = {
    getTasks: async () => {
        const dataservices = DataServices();
        return dataservices.getTasks();
    },
    setTask: async (task) => {
        const dataservices = DataServices();
        return dataservices.setTask(task);
    }
};
export default TasksServices;
