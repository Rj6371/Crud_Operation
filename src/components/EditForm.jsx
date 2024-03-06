import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
// import { NavLink } from 'react-router-dom';


export default function EditForm() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'));
    }, []);

    const handleEdit = async (e) => {
        e.preventDefault();
        let data = { name, email, password };
        let response = await axios.put(`https://65b472db41db5efd28668b79.mockapi.io/Crud/${id}`, data)
        navigate('/');
        return response;
    }

    return (
        <div>
            <h1>Edit Form :</h1>
            <form onSubmit={handleEdit} style={{ display: 'flex', justifyContent: 'center', fontSize: '1.5rem' }}>
                <pre>
                    Name:     :   <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                    Email     :   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    Password  :   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <button>Edit Data</button>
                </pre>
            </form>
        </div>
    )
}