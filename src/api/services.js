export async function getServices(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al intentar obtener los servicios:', error);
      return [];
    }
  }