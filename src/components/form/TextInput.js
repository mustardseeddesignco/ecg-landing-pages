import React from 'react'
import { useField } from "formik";

export default function TextInput({ label, ...props }) {
    const [field, meta] = useField(props);
    let valid
    let inValid
    let errorMsg
    
    if(meta.touched && meta.error) {
    valid = false
    inValid = true
    errorMsg = true
    }
    if(meta.touched && !meta.error) {
    valid = true
    inValid = false
    errorMsg = false
    }

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>

            <input className={`form-control ${inValid ? 'is-invalid': null} ${valid ? 'is-valid' : null}`}
                {...field} 
                {...props} 
            />
                
            {errorMsg ? (
                <div className="text-danger">{meta.error}</div>
            ) : null}
        </>
    )
}