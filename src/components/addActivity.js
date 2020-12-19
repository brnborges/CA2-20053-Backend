
import React, {useState} from 'react';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import url from "../Url";
import CancelIcon from '@material-ui/icons/Cancel';

const AddActivity = (props) => {
    const [data, setData] = useState({
        date: "",
        course: "",
    });

    function handleChange(e) {
        e.persist()
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
        
    }

    function addActivity(){
        console.log("added activity");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var todos1 = props.todos.slice()
        todos1.push({"date":data.date, "course":data.course})
        console.log(todos1)
        console.log(props.todos)
        props.getTodo(todos1)
        console.log(props.todos)

        var raw = JSON.stringify({"date":data.date,"course":data.course});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        props.changeShow(!props.show);
        fetch(url, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        // fetch(url)
        // .then(response => response.json())
        // .then(data => props.getTodo(data))
        // .catch(err => console.log(err))
        // // console.log(todos);
    
    }
    function closeDialog(){
        props.changeShow(!props.show);        
    }

    if(props.show){
    return (
        <div style={container}>
        <div style={close}className="cross-icon">
            <button style={btn}onClick={(e) => closeDialog()} href="#" id="close"><CancelIcon fontSize="large" /> </button>
        </div>
        <div  style={add}className={"add"}>
            <div className="input-section">
                <TextField
                    style={width_full}
                    required
                    onChange={(e) => handleChange(e)}
                    name="date"
                   
                    label="Due date"
                    size="large"
                    variant="filled"

                />
            </div>
            <br />
            <div className="input-section">
            
                <TextField
                    style={width_full}
                    multiline
                  
                    rowsMax={4}
                    required
                    onChange={(e) => handleChange(e)}
                    name="course"
                    label="Course"
                    variant="outlined"
                    size="large"
                />
            </div>

            <Button
                size="large"
                style={buttonStyle}
                onClick={addActivity}
            > <AddIcon  fontSize="large"/>
            </Button>
        </div>
        </div>
    )
}
return ""
};
const close ={
    position:"fixed",
    top:"0px",
    left:"50vw",

}
const btn = {
    color: '#a8c0ff',
    fontSize:"50px",
    backgroundColor:"transparent",
    border:"none"
}
const container = {
    position:"fixed",
    top:"0px",
    left:"0px",
    width:"100vw",
    height:"100vh",
    backgroundColor:"#00000080",
    zIndex:"1"

}
const add = {
    zIndex:"2",
    textAlign:"center",
    width:"100vw",
    height:"100vh",
    position:"fixed",
    top:"20vh",
}
const buttonStyle = {
    background: '#a8c0ff',
    border: 0,
    borderRadius: '10%',
    boxShadow: '0 1px 2px 1px #7fd9f0',
    height: 38,
    marginTop:'20px',
    padding: '22px 0px',

    
}
const width_full = {
    background:"#dddfff70",
    width:"80vw"
}

export default AddActivity;