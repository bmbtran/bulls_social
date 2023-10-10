const BASE_URL = 'http://localhost:3000/locations';

 const getAllLocations = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching all locations:", error);
        return [];
    }
};

 const getLocationById = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching location with ID ${id}:`, error);
        return null;
    }
};
export default {
    getAllLocations,
    getLocationById
}