import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import url from "../Url";
const  Todo = (props) => {
	// console.log(props.data, "Data")
	const data = props.props

	const deleteTodo = () => {
		fetch(url+`/${data._id}`, {
			method:"DELETE"
		})
		var todos1 = props.todos.slice()
		todos1 = todos1.filter((value) => {
			console.log(value._id == data._id)
			return value._id !== data._id;
		})
		console.log(todos1)
		props.getTodo(todos1)
    	
	}
	 return (
	 	<>
	 	<div style={container} className="container">
     
     		<span style={heading}>{data.title}</span>
     

 		<button style={button} onClick={() => deleteTodo()}><DeleteIcon /></button>

 		<div  style={course}className="description">
 			<h5>{data.course}</h5>

 		</div>
 		</div>

        </>
            
      
    )
}

const container = {
	margin:"20px 10%",
	height:"fit-content",
	textAlign:"Center",
	borderRadius:"2%",
  	position: "relative",
	color:"#b1b1b1",
	fontFamily: 'Roboto sans-serif',
	marginTop: 50,

}
const heading = {

	fontSize:"24px",
	fontWeight:"600",
	color:"#b1b1b1",
	fontFamily: 'Roboto sans-serif',
}

const button = {
    background: '#ffa8b3',
    border: 0,
    borderRadius: '5%',
    position:"absolute",
  	right: 0,
  	top: 0,
  	height:" 100%",
  
}
const course = {
	fontFamily: 'Roboto sans-serif',
	marginTop:"-60px",
	textAlign:"left",
	fontSize:"22px",
	color:"b1b1b1"
}

export default Todo;

