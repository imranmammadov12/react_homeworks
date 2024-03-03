import styles from './FormInput.module.css';
import { useId } from "react";
import {useState} from 'react';

const FormInput = ({labelText, type = 'text', name, pattern}) => {
  const id = useId();

  const [isValid, setIsValid] = useState(false);

  const handleInput = e =>{
    const regepx = new RegExp(`^${pattern}$`, 'ig')

    setIsValid(regepx.test(e.target.value))
  }

  
  return (

    <>
    <div className={styles['form-input']}>
        <label htmlFor={id}>{labelText}</label> 
        <input id={id} type = {type} name={name} data-is-valid ={isValid.toString()} onInput={handleInput}/>
        </div>  
    </>
  );
};

export default FormInput;