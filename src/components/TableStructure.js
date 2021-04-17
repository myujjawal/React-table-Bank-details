import React from "react";
import { useTable,useGlobalFilter,usePagination,useRowSelect } from "react-table";
import {GlobalSearch} from "./GlobalSearch"
import './table.css'


const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)
const Favourites={};
//Getting selected Rows {object} on clients localStorage or empty object for first time use
const Fav = JSON.parse(window.localStorage.getItem('Fav'))||{};
const selectLen=window.localStorage.getItem('changeInSelection');

console.log(selectLen);

export default function Table({ columns, data,city }) {
  const INITIAL_SELECTED_ROW_IDS = Fav[city];
  console.log(INITIAL_SELECTED_ROW_IDS);
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
        Header: ({ getToggleAllPageRowsSelectedProps }) => (
          <div>
            Favourite<IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
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

try {
  if(selectLen==Object.keys(selectedRowIds).length)Favourites[selectedFlatRows[0].original.city] = selectedRowIds;

  //Creating selected Rows {object} on clients localStorage
  console.log(city===selectedFlatRows[0].original.city,"hey",selectedRowIds,Favourites);

  window.localStorage.setItem('changeInSelection',JSON.stringify(Object.keys(selectedRowIds).length));
  window.localStorage.setItem('Fav',JSON.stringify(Favourites));
} catch (error) {

}
  
  
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