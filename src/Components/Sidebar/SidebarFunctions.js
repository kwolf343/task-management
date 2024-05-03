import Alerta from "../../Services/Alertas/ServicioAlertasV2";
import Profile from "../Profile/Profile";
export const tasks = () =>{
    window.location.href = "/";
}
export const profile = () =>{
    Alerta.mensaje({
        componente: < Profile />,
        Background: 'rgb(14,39,67)',
        ColorCerrar: 'white'
    });
}