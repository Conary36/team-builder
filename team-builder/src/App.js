import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function Team(){
  const [member, setTeamMember] = useState({ name: "", position: "" })


  const roster = event => {
    setTeamMember({ ...member, [event.target.name]: event.target.value });

  };

  return (

    <div className="App">
      {console.log(member)}
      <form>
        <label>
          Name:
          <input
            type='text'
            name="name"
            onChange={event => roster(event)}
            />
        </label>

        <label>
            Position:
            <input
              type='text'
              name='position'
              onChange={event => roster(event)}
              />
        </label>
      </form>
    </div>

  )
  
}

export default App;
