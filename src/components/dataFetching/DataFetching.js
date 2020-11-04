import React, { useState, useEffect } from 'react';
import style from './DataFetching.module.css';
import DataFetchingService from '../../services/DataFetchingService';
import { MIN, MAX } from '../../constants';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idSubmit, setIdSubmit] = useState(1);

    useEffect(() => {
        async function fetchData() {
            setPosts(await DataFetchingService.getPosts());
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            setPost(await DataFetchingService.getPost(idSubmit));
        }
        if (idSubmit >= MIN) {
            fetchData();
        }
    }, [idSubmit]);

    const userInput = event => {
        const number = parseInt(event.target.value, '10');
        if (number < 0) {
            setId(MIN);
        } else if (number > MAX) {
            setId(MAX);
        } else if (isNaN(number)){
            setId('');
        } else {
            setId(number);
        }
    }

    const userSubmit = event => {
        event.preventDefault();
        setIdSubmit(id);
    }

    return (
       <div className = { style.dataFetching }>
           <form onSubmit = { userSubmit }>
               <input type = 'number' min = { MIN } max = { MAX } step = '1' value = { id } onChange = { userInput }/>
               <button type = 'submit'>Submit</button>
           </form>
           <p>{ post.title }</p>
           <ul>
               {
                   posts.map(post => <li key = { post.id }>{ post.title }</li>)
               }
           </ul>
       </div>
    );
}

export default DataFetching;
