import { useState } from "react";


function UserForm() {
 
    const [user,setUser] = useState({name:'',email:'',password:''});

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setUser(prevUser=>({
            ...prevUser,
            [name]:value
        }));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('User data',user)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password :
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UserForm;