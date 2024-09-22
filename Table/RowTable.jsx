import { useContext } from "react";
import { CreateDataContext } from "../context/TableDataContext";

function RowData({ rowData, columns }) {
    const { setEdit, setCurrentData, setData } = useContext(CreateDataContext)

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {
                columns?.map((ee, ii) =>
                    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                        {rowData?.map((e, i) =>
                            <div style={{ textAlign: "center", padding: "10px", border: "1px solid #000" }}>
                                {ee.name == "ActionButton" ? <div>
                                    <button onClick={() => { setEdit(true); setCurrentData(i) }}>Edit</button>
                                    <button onClick={() => {
                                        setData(prevData =>
                                            prevData.filter((_, i) => _.ID !== e.ID) // Create a new array excluding the item at the index
                                        );
                                    }}>Delete</button>
                                </div> :
                                    e[ee.name]}</div>)}
                    </div>
                )
            }
        </div>
    );
}

export default RowData;
