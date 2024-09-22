function ColumnData({ columns }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", background: "#000" }}>
            {
                columns.map((e) =>
                    <div style={{ background: "#eee", margin: "5px", width: "50%" }}>
                        {e.name}
                    </div>)
            }
        </div>
    );
}

export default ColumnData;

