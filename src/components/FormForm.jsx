import CheckboxRow from './Checkboxrow';

const FormForm = ({ checkboxesData }) => {
    const isValid = checkboxesData.every(({ min, max, children }) =>
      children.length >= min && children.length <= max
    );
  
    return (
      <div>
        {checkboxesData.map(({ name, min, max, children }) => (
          <CheckboxRow key={name} name={name} min={min} max={max} children={children} />
        ))}
        <button disabled={!isValid}>Submit</button>
      </div>
    );
  };


  export default FormForm;