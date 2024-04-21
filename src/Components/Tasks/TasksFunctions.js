import Swal from 'sweetalert2';
import TasksServices from '../../Services/TasksServices';

export const actualizarLista = (lista, status, setTasksDone, setTasksDoing, setTasksVisual) => {
    const tasksDone = lista.filter(task => task.status === 'done');
    const tasksDoing = lista.filter(task => task.status === 'doing');
    setTasksDone(tasksDone);
    setTasksDoing(tasksDoing);
    if(status === 'done'){
        setTasksVisual(tasksDone);
    } else {
        setTasksVisual(tasksDoing);
    }
};

export const cambiarStatus = (myStatus, tasksDone, tasksDoing, setStatus, setTasksVisual) => {
    if (myStatus === 'done') {
        setStatus(myStatus);
        setTasksVisual(tasksDone);
    } else if (myStatus === 'doing') {
        setStatus(myStatus);
        setTasksVisual(tasksDoing);
    }
};

export const nuevaTarea = () => {
    window.location.href = '/FormTarea';
};

export const editarTarea = (index) => {
    window.location.href = `/FormTarea/${index}`;
};

export const eliminarTarea = async (index, tasks, setTasks, actualizarLista) => {
    Swal.fire({
        title: '¿Borrar tarea?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, Borrar!',
        heightAuto: false
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await TasksServices.deleteTask(index);
                const tempTask = tasks.filter(item => item.id !== index);
                setTasks(tempTask);
                actualizarLista(tempTask);
                Swal.fire({
                    title: "Exito",
                    text: "Tarea Borrada exitosamente",
                    icon: "success",
                    heightAuto: false
                });
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "Ocurrió un error al intentar eliminar la tarea",
                    icon: "error",
                    heightAuto: false
                });
            }
        }
    })
};
