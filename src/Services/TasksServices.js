import DataServices from "./DataServices";

const TasksServices = {
    getTasks: async () => {
        const dataservices = DataServices();
        return dataservices.getTasks();
    }
};
export default TasksServices;
