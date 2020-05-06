import React, { useState, useEffect} from 'react'

function FormStudent() {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name])
    const handleName = (event:any )=> {
       setName(event.target.value);
    }
    return (
        <div>
            <form>
                <input type="text" name="name" value={name} placeholder="name" onChange={handleName}/>
                <button type="button"> Start Test</button>
            </form>
        </div>
    )
}

export default FormStudent
