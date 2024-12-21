export default function Button({test_text , color, children}) {
    const onClickButton = (e)=> {
        console.log(e); // Synthetic Base Event
        
        console.log(test_text);
    }
    return (
        <button 
            onClick={onClickButton}
            // onMouseEnter = {onClickButton}
            style={{color : color}}>
        <div>
        {test_text} - {color}
        {children}
        </div>
        </button>
    );
}

Button.defaultProps = {
    color: "green",
};
