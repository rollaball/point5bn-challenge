// import React, { useReducer, useState } from "react";
// import styled from "styled-components";

// const Table = styled.table`
//   border-collapse: collapse;
//   tbody > tr {
//     &:nth-child(even) {
//       background-color: #f8f8f8;
//     }
//     &:hover {
//       background-color: #f2f8ff;
//     }
//   }
//   td {
//     padding: 15px;
//   }
//   th {
//     &:hover {
//       cursor: pointer;
//     }
//     padding: 15px;
//   }
// `;
// const columns = ["Name", "Age", "Address"];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "sort":
//       if (state.sortBy === action.value && state) {
//         return {
//           ...state,
//           sortOrder: state.sortOrder === "asc" ? "desc" : "asc"
//         };
//       }
//       return {
//         ...state,
//         sortOrder: "asc",
//         sortBy: action.value
//       };
//     case "change-page":
//       if (action.pageNo < 3) {
//         return {
//           ...state,
//           currentPage: action.pageNo,
//           pages: [1, 2, 3, 4, 5]
//         };
//       } else if (action.pageNo > state.finalPage - 2) {
//         return {
//           ...state,
//           currentPage: action.pageNo,
//           pages: [
//             state.finalPage - 4,
//             state.finalPage - 3,
//             state.finalPage - 2,
//             state.finalPage - 1,
//             state.finalPage
//           ]
//         };
//       } else {
//         return {
//           ...state,
//           currentPage: action.pageNo,
//           pages: [
//             action.pageNo - 2,
//             action.pageNo - 1,
//             action.pageNo,
//             action.pageNo + 1,
//             action.pageNo + 2
//           ]
//         };
//       }
//     default:
//       return state;
//   }
// };
// const SchoolsTable = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     currentPage: 1,
//     sortBy: null,
//     sortOrder: null,
//     pages: [1, 2, 3, 4, 5],
//     finalPage: 100
//   });
//   const [data, setData] = useState([
//     { Name: "123", Age: "123", Address: "123" },
//     { Name: "123", Age: "123", Address: "123" },
//     { Name: "123", Age: "123", Address: "123" }
//   ]);
//   return (
//     <div>
//       <Table>
//         <thead>
//           <tr>
//             {columns.map(column => (
//               <th
//                 key={column}
//                 onClick={() => dispatch({ type: "sort", value: column })}
//               >
//                 {column}
//                 {column === state.sortBy ? state.sortOrder : ""}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((instance, index) => (
//             <tr key={instance + index}>
//               {columns.map(column => (
//                 <td key={column}>{instance[column]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <div>
//         {state.pages.map(page => (
//           <button
//             onClick={() => dispatch({ type: "change-page", pageNo: page })}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SchoolsTable;
