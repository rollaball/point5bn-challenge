import React, { useState, useEffect } from 'react'
import Map from './map'
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { getColumns, getQueryString } from "./table.services"

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || "https://rocky-escarpment-39603.herokuapp.com";

const SchoolsTable = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(100);
  const [loading, setLoading] = useState(false);
  const [dynamicFilteringObj, setDynamicFilteringObj] = useState({});
  const [latLng, setLatLng] = useState({lat: 1, lng: 0})
  useEffect(() => {
    const params= { ...dynamicFilteringObj, pageSize: 10, page:0 };
    const url = new URL(API_ENDPOINT+"/schools");
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
      .then(data => {
        setPages(data.headers.get('X-page-count'));
        return data.json()
      })
      .then(body => setData(body))
      .then(() => setLoading(false))
  
}, [dynamicFilteringObj])
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setDynamicFilteringObj({
      searchString: formData.get("searchString"),
      category: formData.get("category"),
      gender: formData.get("gender"),
      medium_of_inst: formData.get("medium")
    });
    
  }
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Search: </label>
          <input name="searchString"/>
        </div>
        <div>
          <label>Category: </label>
          <select name="category">
            <option value="">All</option>
            <option>Upper Primary</option>
            <option>Model Primary</option>
            <option>Lower Primary</option>
          </select>
        </div>
        <div>
          <label>Gender: </label>
          <select name="gender">
            <option value="">All</option>
            <option>boys</option>
            <option>girls</option>
            <option>co-ed</option>
          </select>
        </div>
        <div>
          <label>Medium: </label>
          <select name="medium">
            <option value="">All</option>
            <option>kannada</option>
            <option>tamil</option>
            <option>urdu</option>
            <option>telugu</option>
            <option>english</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
      <ReactTable
        data={data} 
        pages={pages} 
        loading={loading}
        columns={getColumns(setLatLng)}
        pageSize={10}
        showPageSizeOptions={false}
        manual 
        onFetchData={(state) => {
          setLoading(true);
          const params=getQueryString({...state, ...dynamicFilteringObj});
          const url = new URL(API_ENDPOINT+"/schools");
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
          fetch(url).then(data => data.json()).then(body => setData(body)).then(() => setLoading(false))
        }}
      />
      <Map lat={latLng.lat} lng={latLng.lng}/>
    </div>
  )
}
    
export default SchoolsTable;