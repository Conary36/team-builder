import React, { useState, useEffect} from 'react';
// import logo from './logo.svg';
import '../App.css';
import characters from './data';


function Form() {
    
    const [member, setTeamMember] = useState({ name: "", email: "", role: "" });

    const [memberResults, setMemberResults] = useState(characters);

    const addNewMember = member => {
        // 1. make obj fit note structure
        const newMember = {

            id: Date.now(),
            name: member.name,
            email: member.email,
            role: member.role
        };

        // 2. spread notes to include all current notes up to this point
        // 3. add new note obj to an array (this is a new array, not notes previously)
        const newMemberCollection = [...memberResults, newMember]; // new array
        // 4. setNotes to the new notes array
        setMemberResults(newMemberCollection);
    };
   
    
     // create useEffect that watches searchTerm and returns a new list
     // of searchResults based on search box input value.
    // useEffect(() => {}, [member]);

     // The handleChange method takes the event object as the argument
     // and sets the current value of the input to the searchTerm state
    //  using setSearchTerm
    const handleChange = event => {
        setTeamMember({ ...member, [event.target.name]: event.target.value });
    }

    
    const handleSubmit = event =>{
        event.preventDefault();
        addNewMember(member);
        setTeamMember({ name: "", email: "", role: ""});
    }

    console.log("member state", member);
        
    

    return (

        <div className="App-header">
            {console.log(member)}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                     <input
                        id='name'
                        type='text'
                        name="name"
                        placeholder='Name'
                        onChange={handleChange}
                        value={member.name}
                        />
                </label>

                <label>
                    Email:
                     <input
                        id='email'
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={member.email}
                        />
                </label>
                <label>
                    Role:
                     <input
                        id='role'
                        type='text'
                        name='role'
                        placeholder='Role'
                        onChange={handleChange}
                        value={member.role}
                        />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <div className="character-list">
                <ul>
                    {memberResults.map(person => {
                        return <div key={person.id}><li>{person.name}{person.email}<div>{person.role}</div></li></div>;
                    })}
                </ul>
            </div>
        </div>

    )

}

export default Form;
