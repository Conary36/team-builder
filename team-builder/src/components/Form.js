import React, { useState, useEffect} from 'react';
// import logo from './logo.svg';
import '../App.css';
import characters from './data';


function Form() {
    const [member, setTeamMember] = useState({ name: "", email: "", role: "" });

    const [memberResults, setMemberResults] = useState(characters);

    
    
     // create useEffect that watches searchTerm and returns a new list
     // of searchResults based on search box input value.
    useEffect(() => {}, [member]);

     // The handleChange method takes the event object as the argument
     // and sets the current value of the input to the searchTerm state
    //  using setSearchTerm
    const handleChange = event => {
        setTeamMember({ ...member, [event.target.name]: event.target.value });
    }

    // const results = characters.filter(character => {
    //     return character.member;
    // });
    const onSubmit = event =>{
        setMemberResults(...memberResults, member);
    }

    // setMemberResults(results);
        
    

    return (

        <div className="App-header">
            {console.log(member)}
            <form>
                <label>
                    Name:
                     <input
                        key="name"
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
                        key="name"
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
                        key='name'
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
                        return <li key={person}>{person.name}{""}{person.email}{""}{person.role}</li>;
                    })}
                </ul>
            </div>
        </div>

    )

}

export default Form;
