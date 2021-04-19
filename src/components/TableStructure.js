import React from "react";
import { useTable,useGlobalFilter,usePagination,useRowSelect } from "react-table";
import {GlobalSearch} from "./GlobalSearch"
import './table.css'

let fl=0;
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" onClick={(e)=>{
          fl=1
          console.log(fl)
        }} ref={resolvedRef} {...rest} />
      </>
    )
  }
)
let Favourites={};
// //Getting selected Rows {object} on clients localStorage or empty object for first time use
const Fav = JSON.parse(window.localStorage.getItem('Favourites'))||{};

// // const selectLen=window.localStorage.getItem('changeInSelection');
console.log("getFav",Fav);
// const prevCity = JSON.parse(window.localStorage.getItem('setCity'));
// console.log("prevCity",prevCity);




export default function Table({ columns, data,city }) {




  
  const INITIAL_SELECTED_ROW_IDS = Fav[city];
  
  // console.log("loadingRows",INITIAL_SELECTED_ROW_IDS);
  
  
  
  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state:{globalFilter,pageIndex, pageSize,selectedRowIds},
    setGlobalFilter,
    prepareRow 
  } = useTable({
    columns,
    data,
    initialState: {
      
      selectedRowIds: INITIAL_SELECTED_ROW_IDS  || {}
  }
  },useGlobalFilter,usePagination,useRowSelect,
  hooks => {
    hooks.visibleColumns.push(columns => [
      // Let's make a column for selection
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            Favourites<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      ...columns,
    ])
  });


Favourites=Fav;
// const PrevCity=window.localStorage.getItem("PrevCity");
if(fl===1){
  try {
    console.log(selectedFlatRows[0].original.city,selectedRowIds);

Favourites[selectedFlatRows[0].original.city] = selectedRowIds;
window.localStorage.setItem("Favourites",JSON.stringify(Favourites));


console.log("setFav",Favourites);
  } catch (error) {
    Favourites[city] = {};
    window.localStorage.setItem("Favourites",JSON.stringify(Favourites));

  }

}
fl=0;
console.log(fl);


    // Render the UI for your table
    
  return (
    <>
    <GlobalSearch filter={globalFilter} setFilter={setGlobalFilter} />
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>

    <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5,10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        
      </div>
    </>
  );
}