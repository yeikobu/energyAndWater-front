/**
 * Se usa para obtener los datos los datos desde el endpoint de servicios
 * @param {String} url - La url del enpoint
 * @returns {Array} - El arreglo que contiene los servicios
 */
export async function getServices(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error al intentar obtener los servicios:', error)
      return []
    }
}