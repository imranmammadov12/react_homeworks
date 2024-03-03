import FormForm from './components/FormForm'

const App = () => {
  const checkboxesData = [
    {
      name: 'Group 1',
      min: 1,
      max: 2,
      children: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
    },
    {
      name: 'Group 2',
      min: 2,
      max: 3,
      children: [
        { label: 'Option 4', value: 'option4' },
        { label: 'Option 5', value: 'option5' },
        { label: 'Option 6', value: 'option6' },
      ],
    },
  ];

  return (
    <div>
      <h1>Checkbox Form</h1>
      <FormForm checkboxesData={checkboxesData} />
    </div>
  );
};


export default App;