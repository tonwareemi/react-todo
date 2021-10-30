import React ,{useState,useEffect} from "react"
import List from "./list"


function App(){

    //state with items and list
    const [item,setItem] = useState("")
    const [list ,setList] = useState(["jerry","tommy","john"]);

    //item saver
    const saver = event =>{
        setItem({val: event.target.value,key:`n${list.lenght}`})
    }

    //items adding into array
    const adding = ()=>{
        var l = list;
        l.push(item)
        setList(l)
        console.log(list)
        setItem("")
        //console.log(list)
    }

    return(
        <div className="home">
            <div className="input">
                <div className="inputField">
                    <input
                    type="text"
                    value={item}
                    onChange={saver} 
                    required
                    />
                <label></label>
                </div>
                <div className="addBtn" onClick={adding}>Add</div>
            </div>
            <List items={list}/>
        </div>
        
    )
}

export default App