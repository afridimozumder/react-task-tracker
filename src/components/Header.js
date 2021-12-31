import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd} />
        </header>
    )
}

//CSS in JSX
// const headStyle ={
//     color:'red', 
//     backgroundColor:'black'
// }

export default Header
