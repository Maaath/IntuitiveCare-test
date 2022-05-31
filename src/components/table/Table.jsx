import DataTable from 'react-data-table-component';
import "./table.css";

// const decoder = new TextDecoder();
// decoder.decode(companies)

const ExpandedComponent = ({ data }) => <pre className='t-json'>{JSON.stringify(data, null, 5)}</pre>;
const Table = (props) => {
    return (
        <DataTable
            columns={props.columns}
            data={props.data}
            selectableRows
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            responsive
            striped
            pointerOnHover
            highlightOnHover
            dense
            persistTableHead
            pagination
            actions
            noDataComponent="Não há resultados para esta busca"
        />
    );
};
export default Table