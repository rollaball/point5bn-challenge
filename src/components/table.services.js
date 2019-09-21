import React from 'react'
import locationIcon from "../images/maps-and-flags.svg"
const getColumns = (setLatLng) => [
  {
    Header: "Location",
    accessor: "latlong                  ",
    Cell: props => <button 
      style={{
        backgroundColor: "white",
        border:"none",
        textAlign: "center",
        width: "100%"
      }} 
      onClick={() => {
        const latlng = props.value.slice(6, props.value.length - 2).split(" ")
        setLatLng({lng: Number(latlng[0]), lat: Number(latlng[1])})
      }}>
        <img alt="locationIcon" src={locationIcon} style={{height: "15px" }} />
      </button>
  },
  {
    Header: "Name",
    accessor: "schoolname",
    width:250
  },
  {
    Header: "District",
    accessor: " district"
  },
  {
    Header: "Medium",
    accessor: "medium_of_inst",
  },
  {
    Header: "Block",
    accessor: "block"
  },
  {
    Header: "Category",
    accessor: "category",
    width: 120
  },
  {
    Header: "Landmark",
    accessor: "landmark",
    width: 200
  },
  {
    Header: "Address",
    accessor: "address"
  },
  {
    Header: "Area",
    accessor: "area",
    width: 160
  },
  {
    Header: "Pincode",
    accessor: "pincode"
  },
  {
    Header: "Gender",
    accessor: "gender",
    width: 70
  }
];
const getQueryString = (state) => {
  const searchObj = {};
  searchObj.pageSize = 10;
  searchObj.page = state.page;
  if(state.sorted.length) {
    searchObj.sortBy = state.sorted[0].id;
    searchObj.sortOrder = state.sorted[0].desc?"desc":"asc";
  }
  if(state.searchString) {
    searchObj.searchString=state.searchString
  }
  return searchObj
}

export { getColumns, getQueryString };