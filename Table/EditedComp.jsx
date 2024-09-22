import { useContext, useState } from "react"
import { CreateDataContext } from "../context/TableDataContext"
import { InputComp } from "./InputComp"

const EditedComp = (props) => {
    const { setEdit, setCurrentData, data, setData } = useContext(CreateDataContext)
    const [inputState,setInputState] = useState(props.data)
    console.log(props.data,"props.data");
    
    const saveHandler = () => {
        setData(prevData => {
            const updatedData = prevData.map((item, i) => 
               i == props.currentData ? { ...item,...inputState } : item
            );            
             return updatedData;
        });
        
        setEdit(false)
    }
    
    return <div>
        {
            props.columns.map((E) => <>{
                E.type ? <>

                    {
                        [props.data]?.map((e) => <InputComp data={e} E={E} setInputState={setInputState} inputState={inputState} />)
                    }

                </> : null
            }</>)
        }
        <button onClick={saveHandler}>save</button>
        {/* {data[props.currenData]} */}
    </div>
}
export { EditedComp }
