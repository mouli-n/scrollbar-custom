import { useState } from "react"
import { useInputState } from "./customhook/useInputState";

const InputComp = (props) => {
    // const {defaultfunc}=useInputState(props);
    const {inputState,setInputState}=props;
    const onChangeHandler = (event)=>{
        const { name, value } = event.target;
        setInputState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }    
    
    return <input value={inputState[props.E.name]} type={props.E.type} name={props?.E?.name} onChange={onChangeHandler} />
}
export { InputComp }
