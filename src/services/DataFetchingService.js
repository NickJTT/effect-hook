import axios from 'axios';
import { BASE_URL } from '../constants';

class DataFetchingService {
    static getPosts = async() => {
        try {
            return (await axios.get(`${ BASE_URL }posts`)).data;
        } catch(exception) {
            console.error(exception);
        }
    }

    static getPost = async id => {
        try {
            return (await axios.get(`${ BASE_URL }posts/${ id }`)).data;
        } catch(exception) {
            console.error(exception);
        }
    }
}

export default DataFetchingService;
