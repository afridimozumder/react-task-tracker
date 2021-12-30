import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='red' text='Add' onClick={onClick} />
        </header>
    )
}

//CSS in JSX
// const headStyle ={
//     color:'red', 
//     backgroundColor:'black'
// }

export default Header
