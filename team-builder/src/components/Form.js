import React, { useState, useEffect} from 'react';
// import logo from './logo.svg';
import '../App.css';
import characters from './data';


function Form() {
    const [member, setTeamMember] = useState({ name: "", email: "", role: "" });

    const [memberResults, setMemberResults] = useState(characters);

    // const roster = event => {
    //     setTeamMember({ ...member, [event.target.name]: event.target.value });

    // };

     // create useEffect that watches searchTerm and returns a new list
     // of searchResults based on search box input value.
    useEffect(()=>{}, [member]);

     // The handleChange method takes the event object as the argument
     // and sets the current value of the input to the searchTerm state
    //  using setSearchTerm
    const handleChange = event => {
        setTeamMember(event.target.value);
    }

    // const results = characters.filter(character => {
    //     return member.results;
    // });

        // setMemberResults(results);
    

    return (

        <div className="App-header">
            {console.log(member)}
            <form>
                <label>
                    Name:
                     <input
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
                
                        type='text'
                        name='role'
                        placeholder='Role'
                        onChange={handleChange}
                        value={member.role}
                        />
                </label>
            </form>
            <div className="character-list">
                <ul>
                    {memberResults.map(person => {
                        return <li key={person}>{person}</li>;
                    })}
                </ul>
            </div>
        </div>

    )

}

export default Form;
