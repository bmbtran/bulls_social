const BASE_URL = 'http://localhost:3000/events';

 const getAllEvents = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching all events:", error);
        return [];
    }
};
 const getEventById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching event with ID ${id}:`, error);
        return null;
    }
};



export default {
    getAllEvents,
    getEventById
}
