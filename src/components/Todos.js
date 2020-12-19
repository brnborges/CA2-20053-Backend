import {React, useState ,useEffect} from "react";
import url from "../Url";
import Todo from "./Todo";
import AddActivity from "./addActivity";
import Button from "@material-ui/core/Button";

	
const Todos = () => {
	const [todos, getTodo] = useState([]);
	const [show ,changeShow] = useState(false);
	
	//Fetch the data
	useEffect(() => {
		fetch(url)
		.then(response => response.json())
		.then(data => getTodo(data))
		.catch(err => console.log(err))
		// console.log(todos);

	}, [])
	
	return(
	
		<>
		
		<div style={align_item}>
        <Button onClick={() => changeShow(!show)} style={button_style}>Add Upcoming Activities</Button>
        </div>

		<AddActivity show={show}  changeShow={changeShow} todos={todos} getTodo={getTodo} />
		
		{todos.map((each) => (
			// {console.log(each)}
			<Todo show={show}todos={todos} getTodo={getTodo} props={each} />
		)
		)}
		</>

	)
}
const align_item = {
	width:"100vw",
	textAlign:'center'

}
const button_style = {
	marginTop: 100,
	textAlign:"center",
	background: '#a8c0ff',
    border: 0,
    borderRadius: '10%',
    boxShadow: '0 3px 5px 2px #bdc3c7',
    height:40,
    color: '#20002c',

    padding:'0 20px',
}

export default Todos;