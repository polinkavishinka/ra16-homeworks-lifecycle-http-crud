import axios from "axios";

export class Service {

    static async getAllCards() {
        const response = await axios.get('http://localhost:7070/notes');
        return response;
    }

    static async create(id: number, content: string) {
        const response = await axios.post('http://localhost:7070/notes', {id, content});
        return response;
    }

    static async delete(id: number) {
        const response = await axios.delete(`http://localhost:7070/notes/${id}`);
        return response;
    }
   
   
  
}