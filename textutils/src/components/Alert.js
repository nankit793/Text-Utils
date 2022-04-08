import React from 'react';

export default function Alert(props) {
    const capitalize = (word)=> {
        const string = word.toLowerCase();
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return(
    <> 
    { props.alert  &&
     <div>
        <div className="alert alert-info alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}! </strong>{ props.alert.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
}
    </>
    ) }