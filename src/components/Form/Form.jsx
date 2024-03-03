import FormInput from "./FormInput";
import styles from './Form.module.css';
import { useState } from "react";

const Form = ({onSubmit, inputsData}) => {

    const [isFormValid, setIsFormValid] = useState(false);


    const handleSubmit = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        onSubmit(formData);
    }

    // const inputs = inputsData.map(
    //     inputData => <FormInput 
    //      labelText={inputData.labelText} 
    //      name={inputData.name} 
    //      type ={inputData.type}
    //      pattern ={inputData.pattern}
    //      key={inputData.key}
         
    //      />
    // )


    const handleInputChange = (isValid) => {

        setIsFormValid(isValid);
        setIsFormValid(isFormValid);
    };


    const inputs = inputsData.map(
        inputData => <FormInput 
       {...inputData}
        onInputChange={handleInputChange}
        key={inputData.key}
         />
    )


    

    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${isFormValid ? styles.valid : styles.invalid}`}>
          <legend>
              Full name
          </legend>

        {inputs}

        <button type="submit">Submit</button>
        </form>
    )
}

export default Form;