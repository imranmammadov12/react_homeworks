import Button from '../../Button/Button'

const ButtonPlus = ({setCount, count}) => {
    const plus = () => {
        setCount(count + 1);
        console.log(count);
      }
    return (
        <Button qorwok={plus}>+</Button>
    )
}

export default ButtonPlus;