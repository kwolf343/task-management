import Swal from 'sweetalert2';
import Task from '../../Models/Task';
import TasksServices from '../../Services/TasksServices';

export const fetchData = async (parametro, setName, setStatus, setDueDate, setDescription) => {
    if(parametro){
        try {
            const myTask = await TasksServices.getTask(parametro);
            if(myTask){
                setName(myTask.name);
                setStatus(myTask.status);
                setDueDate(myTask.dueDate.slice(0, 10));
                setDescription(myTask.description);
            }
        } catch(error) {
            console.log(error);
        }
    }
};
export const enviar = async (parametro, name, description, status, dueDate) => {
    if (name.trim() === '' || description.trim() === '' || status.trim() === '' || dueDate.trim() === '') {
        Swal.fire({
            title: "Error!",
            text: "Por favor completa todos los campos.",
            icon: "error",
            heightAuto: false
        });
        return;
    }
    try {
        const task = new Task(name, description, status, dueDate);
        let mensaje='';
        if(!parametro){
            const response = await TasksServices.setTask(task);
            mensaje='guardada';
        } else {
            const response = await TasksServices.updateTask(parametro,task);
            mensaje='actualizada';
        }
        Swal.fire({
            title: "Exito!",
            text: `Tarea ${mensaje} exitosamente`,
            icon: "success",
            heightAuto: false
        }).then((result) => {
            window.location.href = '/';
        });
    } catch (error) {
        Swal.fire({
            title: "Ocurrió un error!",
            text: error,
            icon: "error",
            heightAuto: false
        });
    }
};


export const cancelar = () =>{
    window.location.href = '/';
};
