import React from 'react';
const List=(props)=>{
    return(
        <>
        <div className="todostyle">
        <i className="fa fa-times" aria-hidden="true" onClick=
            {
                ()=>{
                    props.onSelect(props.id)
                }
            }
        />
        <li>{props.item}</li>
        </div>
        
        </>
    )
}

export default List;