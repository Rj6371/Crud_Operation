import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";


export default function Home() {
    const [api, setApi] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const URL = 'https://65b472db41db5efd28668b79.mockapi.io/Crud';

    //------------------------------Get Data----------------------------------

    const getData = async () => {
        let response = await axios.get(URL);
        setApi(response.data);
    }

    //------------------------------Post Data----------------------------------

    const postData = async (e) => {
        e.preventDefault();
        let datas = { name, email, password };
        let response = await axios.post('https://65b472db41db5efd28668b79.mockapi.io/Crud', datas);
        getData();
        setName('');
        setEmail('');
        setPassword('');
        return response;
    }

    //------------------------------Delete Data----------------------------------

    const deleteData = async (id) => {
        let response = await axios.delete(`https://65b472db41db5efd28668b79.mockapi.io/Crud/${id}`);
        getData();
        return response;
    };


    //------------------------------Edit Data----------------------------------

    const editData = async (id, name, email, password) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Home Page:</h1>
            <hr />
            <center>
                {/*------------------User Information---------------------------------- */}
                {/* <h2>Post Data:</h2> */}
                <form onSubmit={postData}>
                    <pre>
                        Name:     :   <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                        Email     :   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                        Password  :   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <button>Submit</button><br /><br /><br />
                        <br /><br /><br />
                    </pre>
                </form>
                {/* <h2>Fetch Data:</h2> */}
                {/*------------------fetch data by map---------------------------------- */}
                <table border={1}>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            api.map((info) => {
                                return <tr key={info.id}>
                                    <th>{info.id}</th>
                                    <th>{info.name}</th>
                                    <th>{info.email}</th>
                                    <th>{info.password}</th>
                                    <th><NavLink to='/editForm'><button onClick={
                                        () => editData(info.id, info.name, info.email, info.password)
                                    }>Edit</button></NavLink>
                                    </th>
                                    <th>
                                        <button onClick={() => {
                                            if (window.confirm('Are you Confirm to Delete Data')) {
                                                deleteData(info.id)
                                            }
                                        }}>Delete</button>
                                    </th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </center>
        </div >
    )
}

