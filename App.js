import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import TableDataContext, { CreateDataContext } from './context/TableDataContext';
import TableComp from './Table/TableComp';
import { EditedComp } from './Table/EditedComp';

function App() {
  const [val, setVal] = useState([]);
  const { data,edit,currentData } = useContext(CreateDataContext)
  let Columns = [
    {
      "name": "ID",
      "header": 301,
      "sortable": true,
      "type": "number",
      "filtertype": "number",
      "cssClass": "text-align-right"
    },
    {
      "name": "Name",
      "header": 12210,
      "sortable": true,
      "type": "text"
    },
    {
      "name": "ActionButton",
      "isColumnFreeze": true,
      "header": 12387,
      "defaultWidth": 60
    }
  ]

  return (
    <div className="App">
      {
      edit ?
       <div>
        <EditedComp columns={Columns} data={data[currentData]} currentData={currentData}/>
      </div>:
      <TableComp columns={Columns} rowData={data} />
      }
     
    </div>
  );
}

export default App;
