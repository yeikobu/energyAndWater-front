import { atom } from 'nanostores'

//Estado para controlar el navbar de dispositivos de pantalla pequeña
export const showNavMenu = atom(false)

//Estado para controlar si el formulario de contacto está abierto o no
export const isContctUsFormOpen = atom(false)

//Estado para controlar que un elemento de la tarjeta de servicios sea preseleccionado al momento de presionar el botón de cotizar
export const selectedService = atom("")
