(this["webpackJsonpbank-table"]=this["webpackJsonpbank-table"]||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(9),o=n.n(r),i=(n(16),n(8)),s=n(10),l=n(1),u=n(11),j=n(4),d=(n(7),n(0)),b=function(e){var t=e.filter,n=e.setFilter;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"Head",children:Object(d.jsxs)("span",{className:"Top",children:["Search: ","",Object(d.jsx)("input",{value:t||"",onChange:function(e){return n(e.target.value)}})]})})})},g=0,O=a.a.forwardRef((function(e,t){var n=e.indeterminate,c=Object(u.a)(e,["indeterminate"]),r=a.a.useRef(),o=t||r;return a.a.useEffect((function(){o.current.indeterminate=n}),[o,n]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(l.a)({type:"checkbox",onClick:function(e){g=1,console.log(g)},ref:o},c))})})),h={},p=JSON.parse(window.localStorage.getItem("Favourites"))||{};function f(e){var t=e.columns,n=e.data,c=e.city,a=p[c],r=Object(j.useTable)({columns:t,data:n,initialState:{selectedRowIds:a||{}}},j.useGlobalFilter,j.usePagination,j.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){e.getToggleAllPageRowsSelectedProps;return Object(d.jsx)("div",{children:"Favourite"})},Cell:function(e){var t=e.row;return Object(d.jsx)("div",{children:Object(d.jsx)(O,Object(l.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(s.a)(e))}))})),o=r.getTableProps,i=r.getTableBodyProps,u=r.headerGroups,f=r.page,x=r.canPreviousPage,v=r.canNextPage,m=r.pageOptions,w=r.pageCount,y=r.gotoPage,S=r.nextPage,C=r.previousPage,P=r.setPageSize,F=r.selectedFlatRows,k=r.state,I=k.globalFilter,N=k.pageIndex,A=k.pageSize,H=k.selectedRowIds,B=r.setGlobalFilter,R=r.prepareRow;return h=p,1===g&&(console.log(F[0].original.city,H),h[F[0].original.city]=H,window.localStorage.setItem("Favourites",JSON.stringify(h)),console.log("setFav",h)),g=0,console.log(g),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{filter:I,setFilter:B}),Object(d.jsxs)("table",Object(l.a)(Object(l.a)({},o()),{},{children:[Object(d.jsx)("thead",{children:u.map((function(e){return Object(d.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(d.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(d.jsx)("tbody",Object(l.a)(Object(l.a)({},i()),{},{children:f.map((function(e,t){return R(e),Object(d.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(d.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(d.jsxs)("div",{className:"pagination",children:[Object(d.jsx)("button",{onClick:function(){return y(0)},disabled:!x,children:"<<"})," ",Object(d.jsx)("button",{onClick:function(){return C()},disabled:!x,children:"<"})," ",Object(d.jsx)("button",{onClick:function(){return S()},disabled:!v,children:">"})," ",Object(d.jsx)("button",{onClick:function(){return y(w-1)},disabled:!v,children:">>"})," ",Object(d.jsxs)("span",{children:["Page"," ",Object(d.jsxs)("strong",{children:[N+1," of ",m.length]})," "]}),Object(d.jsxs)("span",{children:["| Go to page:"," ",Object(d.jsx)("input",{type:"number",defaultValue:N+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;y(t)},style:{width:"100px"}})]})," ",Object(d.jsx)("select",{value:A,onChange:function(e){P(Number(e.target.value))},children:[5,10,20,30,40,50].map((function(e){return Object(d.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})}console.log("getFav",p),n(21).polyfill(),n(24);var x={},v="MUMBAI";function m(){var e=Object(c.useState)(window.localStorage.getItem("city")||"MUMBAI"),t=Object(i.a)(e,2),n=t[0],a=t[1],r=JSON.parse(window.localStorage.getItem("cityCache"))||{};x=r;var o=r[n]||[],s=Object(c.useState)(o),l=Object(i.a)(s,2),u=l[0],j=l[1];Object(c.useEffect)((function(){n in r?j(r[n]):fetch("https://vast-shore-74260.herokuapp.com/banks?city="+n).then((function(e){return e.json()})).then((function(e){j(e),x[n]=e,window.localStorage.setItem("cityCache",JSON.stringify(x))}))}),[n]);var b=Object(c.useMemo)((function(){return[{Header:"IFSC",accessor:"ifsc"},{Header:"Bank ID",accessor:"bank_id"},{Header:"Branch",accessor:"branch"},{Header:"Address",accessor:"address"},{Header:"City",accessor:"city"},{Header:"District",accessor:"district"},{Header:"State",accessor:"state"},{Header:"Bank Name",accessor:"bank_name"}]}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("h1",{children:"Bank Searches"}),Object(d.jsx)("label",{for:"city",children:"Choose a City: "}),Object(d.jsxs)("select",{onChange:function(e){window.localStorage.setItem("PrevCity",JSON.stringify(v)),v=e.target.value,a(e.target.value),console.log(e.data)},name:"city",id:"city",children:[Object(d.jsx)("option",{value:"MUMBAI",children:"Mumbai"}),Object(d.jsx)("option",{value:"BANGALORE",children:"Bangalore"}),Object(d.jsx)("option",{value:"DELHI",children:"Delhi"}),Object(d.jsx)("option",{value:"PATNA",children:"Patna"}),Object(d.jsx)("option",{value:"AGARTALA",children:"Agartala"})]})]}),Object(d.jsx)(f,{columns:b,data:u,city:n})]})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(m,{}),document.getElementById("root")),w()},7:function(e,t,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.3cd897ce.chunk.js.map