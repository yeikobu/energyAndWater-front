import { atom } from 'nanostores'

//Estado para controlar el navbar de dispositivos de pantalla pequeña
export const showNavMenu = atom(false)

//Estado para controlar que un elemento de la tarjeta de servicios sea preseleccionado al momento de presionar el botón de cotizar
export const selectedService = atom("")
