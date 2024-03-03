import Button from '../../Button/Button'

const ButtonMinus = ({setCount, count}) => {
    const minus = () => {
        setCount(count - 1);
        console.log(count);
      }
    return (
        <Button qorwok={minus}>-</Button>
    )
}

export default ButtonMinus;