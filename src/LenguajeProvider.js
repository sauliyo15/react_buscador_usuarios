import React, { createContext, useState } from "react";

export const LenguajeContext = createContext({});

const lenguajeDatos = {
    "en": {
        name: "name",
        email: "email",
        search: "Search",
        seeall: "See all"
    },
    "es": {
        name: "nombre",
        email: "correo",
        search: "Buscar",
        seeall: "Ver todos"
    },
};

export function LenguajeProvider(props) {
    const [lenguaje, setLenguaje] = useState("es");

    function switchLenguaje(nuevoLenguaje) {
        setLenguaje(nuevoLenguaje);
    }

    const contexto = {
        lengua: lenguaje,
        strings: lenguajeDatos[lenguaje],
        switchLenguaje: switchLenguaje
    };

    return <LenguajeContext.Provider value={contexto}>
        {props.children}
        </LenguajeContext.Provider>
}