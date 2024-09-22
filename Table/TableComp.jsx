import ColumnData from "./ColumnTable";
import RowData from "./RowTable";

function TableComp(props) {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    <ColumnData columns={props.columns} />
    <RowData rowData={props.rowData} columns={props.columns}/>
    </div>
  );
}

export default TableComp;
