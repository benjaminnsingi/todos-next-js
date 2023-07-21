import React, {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/todos?_page=0&_limit=10";
const List = () => {
    const [todos, setTodos] = useState([]);

    const loadTodo = () => {
        axios.get(baseUrl).then((response) => {
            console.log(response);
            setTodos(response.todos)
        });
    }

    useEffect(() => {
        loadTodo()
        axios.get(baseUrl).then((response) => {
            console.log(response.data);
            setTodos(response.data)
        })
    }, []);

    if (!todos) return null;

    return (
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th colSpan="2">Liste des articles</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map((todo, index) => (
                        //console.log(post.nom)
                        <tr key={index}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default List;