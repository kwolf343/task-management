/*
  ###########################################
  SERVICIO DE ALERTAS PERSONALIZADAS V2.0
  ###########################################
  AUTOR: KEVIN ANTONIO MAGAÑA MONROY
  FECHA DE CREACIÓN: 2 MAYO 2024
  DESCRIPCION:
  Versión 2.0 de mi servicio de alertas personalizadas.
  Esta versión permite pasar componentes como alertas,
  manteniendo la estrutura con los botones de la versión
  anterior
  INSTRUCCIONES:
  1- Copiamos y pegamos la carpeta Alertas que contiene los archivos ServicioAlertasV2.js y ServicioAlertasV2.css
  2- Importamos el servicio de alertas de: import Alerta from "../Alertas/ServicioAlertasV2";
  3- Usamos la siguiente sintaxis:
  
  Para lanzar una alerta simple:

  Alerta.mensaje({
        componente: < MiComponente />,
        Si: false,
        No: false,
        Ok: true,
        Cancelar: false
    });
  Esto mostrará una alerta con un solo botón (OK) y se cerraá cuando se de click

  Para lanzar una alerta con Si o No

  Alerta.mensaje({
        componente: < MiComponente />,
        Si: true,
        No: true,
        Ok: false,
        Cancelar: false
    }).then((result) => {
        if (result) {
            // El usuario hizo clic en OK o SI
            alert('SI');
        } else {
            // El usuario hizo clic en NO, CANCELAR o cerró con el botón superior derecho
            alert('NO');
        }
    });

    Alerta mas personalizada:

    Alerta.mensaje({
        componente: < MiComponente />,
        Si: true,
        No: true,
        Ok: true,
        Cancelar: true,
        Background: '#ffff',
        ColorSi: 'rgb(45,78,150)',
        ColorNo: 'green',
        ColorOk: 'gray', 
        ColorCancelar: 'black'
    });

    Background: '#ffff'         dará un fondo muy blanco a la alerta
    ColorSi: 'rgb(45,78,150)'   dará un fondo azul con rgb al botón si
    ColorNo: 'green'            dará un fondo verde al botón no
    ColorOk: 'gray'             dará un fondo gris al botón no
    ColorCancelar: 'black'      dará un fondo negro al botón no


    Para ajustar el tamaño de la alerta por porcentaje en la pantalla principal se deberá
    poner el componente en un div con una clase y a esa clase darle el whidt con el porcentaje
    deseado con vw. Así

    ----------   COMPONENTE   ----------
    import "./styles.css";
    const MiComponente = () => {
    return (
        <div className="Ajustar">
            HOLA MUNDO
        </div>
    );
    export default MiComponente;

    ----------      CSS      -----------
    .Ajustar{
      width: 50vw;
    }

    Esto ará que la alerta ocupe el 50% de la pantalla
}
*/

import ReactDOM from 'react-dom';
import './ServicioAlertasV2.css';

class AlertasPorComponente {
  constructor() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
    document.head.appendChild(link); 
  }

  agregarEstilos = (estilos) => {
    const { Background, ColorSi, ColorNo, ColorOk, ColorCancelar, ColorCerrar} = estilos;
    var styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);
    if (styleSheet.sheet != null) {
      styleSheet.sheet.insertRule(`
        .Alert-Service-Background{
          background:${Background};
        }
        `, 0);
      styleSheet.sheet.insertRule(`
        .Alert-Service-Color-Si{
          background:${ColorSi};
        }
        `, 0);
      styleSheet.sheet.insertRule(`
        .Alert-Service-Color-No{
          background:${ColorNo};
        }
        `, 0);
      styleSheet.sheet.insertRule(`
        .Alert-Service-Color-Ok{
          background:${ColorOk};
        }
        `, 0);
      styleSheet.sheet.insertRule(`
        .Alert-Service-Color-Cancelar{
          background:${ColorCancelar};
        }
        `, 0);
        styleSheet.sheet.insertRule(`
        .Alert-Service-Color-Cerrar{
          color:${ColorCerrar};
        }
        `, 0);
    }
  };

  mensaje = ({ componente, Si, No, Ok, Cancelar, Background, ColorSi, ColorNo, ColorOk, ColorCancelar, ColorCerrar}) => {
    return new Promise((resolve) => {
      this.agregarEstilos({ Background, ColorSi, ColorNo, ColorOk, ColorCancelar, ColorCerrar});
      //Creando elementos
      const contenedor = document.querySelector("body");
      const contenedorPrincipal = document.createElement("div");
      const contenedorCentral = document.createElement("div");
      const contenedorSuperior = document.createElement("div");
      const btnCerrar = document.createElement("I");
      const contenedorComponente = document.createElement("div");
      const contenedorInferior = document.createElement("div");
      const btnSi = document.createElement("BUTTON");
      const btnNo = document.createElement("BUTTON");
      const btnOk = document.createElement("BUTTON");
      const btnCancelar = document.createElement("BUTTON");

      //Renderizando el componente central en el dom
      ReactDOM.render(componente, contenedorComponente);

      //Agregando clases en elementos
      contenedorPrincipal.classList.add("Alert-Service-Principal");
      contenedorCentral.classList.add("Alert-Service-Central");
      contenedorSuperior.classList.add("Alert-Service-Superior");
      btnCerrar.classList.add("bi");
      btnCerrar.classList.add("bi-x-lg");
      btnCerrar.classList.add("Alert-Service-btnCerrar");
      btnSi.classList.add("Alert-Service-btn");
      btnNo.classList.add("Alert-Service-btn");
      btnOk.classList.add("Alert-Service-btn");
      btnCancelar.classList.add("Alert-Service-btn");
      btnSi.classList.add("Alert-Service-btnSi");
      btnNo.classList.add("Alert-Service-btnNo");
      btnOk.classList.add("Alert-Service-btnOk");
      btnCancelar.classList.add("Alert-Service-btnCancelar");
      contenedorComponente.classList.add("Alert-Service-Componente");
      contenedorInferior.classList.add("Alert-Service-Inferior");

      contenedorCentral?.classList.add("Alert-Service-Background");
      btnSi?.classList.add("Alert-Service-Color-Si");
      btnNo?.classList.add("Alert-Service-Color-No");
      btnOk?.classList.add("Alert-Service-Color-Ok");
      btnCancelar?.classList.add("Alert-Service-Color-Cancelar");
      btnCerrar?.classList.add("Alert-Service-Color-Cerrar");

      //Preparando elementos
      btnSi.innerHTML = "SI";
      btnNo.innerHTML = "NO";
      btnOk.innerHTML = "OK";
      btnCancelar.innerHTML = "CANCELAR";

      //Insertando elementos
      contenedorPrincipal.appendChild(contenedorCentral);
      contenedorSuperior.appendChild(btnCerrar);
      contenedorCentral.appendChild(contenedorSuperior);
      contenedorCentral.appendChild(contenedorComponente);

      if (Si !== null && Si === true) contenedorInferior.appendChild(btnSi);
      if (No !== null && No === true) contenedorInferior.appendChild(btnNo);
      if (Ok !== null && Ok === true) contenedorInferior.appendChild(btnOk);
      if (Cancelar !== null && Cancelar === true) contenedorInferior.appendChild(btnCancelar);

      contenedorCentral.appendChild(contenedorInferior);
      if (contenedor != null) contenedor.appendChild(contenedorPrincipal);

      //Efecto de crecimiento en contenedor
      setTimeout(function () {
        contenedorCentral.classList.add("Alert-Service-Central-Efecto");
      }, 100);

      //Funcionalidad en botones
      btnCerrar.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
        resolve(false);
      });
      btnCancelar.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
        resolve(false);
      });
      btnOk.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
        resolve(true);
      });
      btnSi.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
        resolve(true);
      });
      btnNo.addEventListener('click', () => {
        if (contenedorPrincipal.parentElement) contenedorPrincipal.parentElement.removeChild(contenedorPrincipal);
        resolve(false);
      });
    });
  };
}

export default new AlertasPorComponente();
