function Button({qorwok, children}) {
    return (
        <button onClick={qorwok}>
            {children}
        </button>
       
    )
}
 
export default Button;