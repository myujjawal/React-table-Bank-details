(this["webpackJsonpbank-table"]=this["webpackJsonpbank-table"]||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(9),s=n.n(r),o=(n(16),n(8)),i=n(10),l=n(1),j=n(11),u=n(4),d=(n(7),n(0)),b=function(e){var t=e.filter,n=e.setFilter;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"Head",children:Object(d.jsxs)("span",{className:"Top",children:["Search: ","",Object(d.jsx)("input",{value:t||"",onChange:function(e){return n(e.target.value)}})]})})})},g=a.a.forwardRef((function(e,t){var n=e.indeterminate,c=Object(j.a)(e,["indeterminate"]),r=a.a.useRef(),s=t||r;return a.a.useEffect((function(){s.current.indeterminate=n}),[s,n]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(l.a)({type:"checkbox",ref:s},c))})})),h={},O=JSON.parse(window.localStorage.getItem("Fav"))||{},p=window.localStorage.getItem("changeInSelection");function f(e){var t=e.columns,n=e.data,c=e.city,a=O[c];console.log(a);var r=Object(u.useTable)({columns:t,data:n,initialState:{selectedRowIds:a||{}}},u.useGlobalFilter,u.usePagination,u.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllPageRowsSelectedProps;return Object(d.jsxs)("div",{children:["Favourite",Object(d.jsx)(g,Object(l.a)({},t()))]})},Cell:function(e){var t=e.row;return Object(d.jsx)("div",{children:Object(d.jsx)(g,Object(l.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(i.a)(e))}))})),s=r.getTableProps,o=r.getTableBodyProps,j=r.headerGroups,f=r.page,x=r.canPreviousPage,v=r.canNextPage,m=r.pageOptions,w=r.pageCount,y=r.gotoPage,S=r.nextPage,C=r.previousPage,P=r.setPageSize,I=r.selectedFlatRows,k=r.state,F=k.globalFilter,N=k.pageIndex,H=k.pageSize,A=k.selectedRowIds,R=r.setGlobalFilter,B=r.prepareRow;try{p==Object.keys(A).length&&(h[I[0].original.city]=A),console.log(c===I[0].original.city,"hey",A,h),window.localStorage.setItem("changeInSelection",JSON.stringify(Object.keys(A).length)),window.localStorage.setItem("Fav",JSON.stringify(h))}catch(T){}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{filter:F,setFilter:R}),Object(d.jsxs)("table",Object(l.a)(Object(l.a)({},s()),{},{children:[Object(d.jsx)("thead",{children:j.map((function(e){return Object(d.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(d.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(d.jsx)("tbody",Object(l.a)(Object(l.a)({},o()),{},{children:f.map((function(e,t){return B(e),Object(d.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(d.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(d.jsxs)("div",{className:"pagination",children:[Object(d.jsx)("button",{onClick:function(){return y(0)},disabled:!x,children:"<<"})," ",Object(d.jsx)("button",{onClick:function(){return C()},disabled:!x,children:"<"})," ",Object(d.jsx)("button",{onClick:function(){return S()},disabled:!v,children:">"})," ",Object(d.jsx)("button",{onClick:function(){return y(w-1)},disabled:!v,children:">>"})," ",Object(d.jsxs)("span",{children:["Page"," ",Object(d.jsxs)("strong",{children:[N+1," of ",m.length]})," "]}),Object(d.jsxs)("span",{children:["| Go to page:"," ",Object(d.jsx)("input",{type:"number",defaultValue:N+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;y(t)},style:{width:"100px"}})]})," ",Object(d.jsx)("select",{value:H,onChange:function(e){P(Number(e.target.value))},children:[5,10,20,30,40,50].map((function(e){return Object(d.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})}console.log(p),n(21).polyfill(),n(24);var x={};function v(){var e=Object(c.useState)(window.localStorage.getItem("city")||"MUMBAI"),t=Object(o.a)(e,2),n=t[0],a=t[1],r=JSON.parse(window.localStorage.getItem("cityCache"))||{};console.log("getcachecC",r),x=r;var s=r[n]||[],i=Object(c.useState)(s),l=Object(o.a)(i,2),j=l[0],u=l[1];Object(c.useEffect)((function(){n in r?u(r[n]):fetch("https://vast-shore-74260.herokuapp.com/banks?city="+n).then((function(e){return e.json()})).then((function(e){u(e),x[n]=e,console.log("setCache",x),window.localStorage.setItem("cityCache",JSON.stringify(x))}))}),[n]);var b=Object(c.useMemo)((function(){return[{Header:"IFSC",accessor:"ifsc"},{Header:"Bank ID",accessor:"bank_id"},{Header:"Branch",accessor:"branch"},{Header:"Address",accessor:"address"},{Header:"City",accessor:"city"},{Header:"District",accessor:"district"},{Header:"State",accessor:"state"},{Header:"Bank Name",accessor:"bank_name"}]}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("h1",{children:"Bank Searches"}),Object(d.jsx)("label",{for:"city",children:"Choose a City: "}),Object(d.jsxs)("select",{onChange:function(e){return a(e.target.value)},name:"city",id:"city",children:[Object(d.jsx)("option",{value:"MUMBAI",children:"Mumbai"}),Object(d.jsx)("option",{value:"BANGALORE",children:"Bangalore"}),Object(d.jsx)("option",{value:"DELHI",children:"Delhi"}),Object(d.jsx)("option",{value:"PATNA",children:"Patna"}),Object(d.jsx)("option",{value:"AGARTALA",children:"Agartala"})]})]}),Object(d.jsx)(f,{columns:b,data:j,city:n})]})}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),m()},7:function(e,t,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.e7c97076.chunk.js.map