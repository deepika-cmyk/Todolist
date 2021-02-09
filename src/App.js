import React, { useState } from 'react';
import List from './List';
const App=()=>{
  const[list ,setlist]=useState('');
  const[items , setitems]=useState([]);
  const InputEvent=(event)=>{
    setlist(event.target.value);

  }
  const Insertitem=()=>{
    setitems((olditem)=>{
      return[...olditem, list];
    });
    setlist('');
  }
  const deleteitem=(id)=>{
       setitems((olditem)=>{
         return olditem.filter(( array,index)=>{
           return index!==id;

         });
       });
  }

  return(
    <>
    <div className="maindiv">
    <div className="centerdiv">
    <br/>
    <h1>TODO LIST</h1>
    <b/>
    <input type="Text" placeholder="Add an item"  onChange={InputEvent} value={list}/>
    <button onClick={Insertitem}>+</button>
    <ol>
    {
     items.map((curval ,i)=>{
       return(
         <List 
          key={i}
          id={i}
          item={curval}
          onSelect={deleteitem}

          />
          )
     })

      }
    </ol>
      
    </div>

    </div>



    </>
  )

}

export default App;
