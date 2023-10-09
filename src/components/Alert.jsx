import React from 'react'

export default function Alert(props) {
    const capitalise =(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/* <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg> */}
        <strong> {capitalise(props.alert.type)} </strong> : {props.alert.message}
    </div>
  )
}
