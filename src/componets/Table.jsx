'use client';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
axios.get(`http://127.0.0.1:8000/api/business/get`).then(function(data){
console.log(data);
});
const columns = [
    {
        name: 'id',
        selector: row => row.id,
        width: '100px'
    },
    {
        name: 'coverimage',
        cell: row => <img src={row.image_url} width={50} alt={row.name}></img>,
        selector: row => row.coverimage,
        width: '100px'
    },
    {
        name: 'name',
        selector: row => row.name,
        width: '200px'
    },
    {
        name: 'detail',
        selector: row => row.detail,
        width: '500px'
    },
    {
        name: 'latitude',
        selector: row => row.coordinates.latitude,
        width: '100px'
    },
    {
        name: 'longitude',
        selector: row => row.coordinates.longitude,
        width: '100px'
    },
  ];

function IniTableData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
  
    useEffect(() => {
      fetchData(1, perPage);
    }, [perPage])
  
    const fetchData = async (page, per_page) => {
      fetch(`http://127.0.0.1:8000/api/business/get?page=${page}&per_page=${per_page}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data);
            setTotalRows(result.total);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  
    const handlePageChange = page => {
      fetchData(page, perPage);
    }
  
    const handlePerRowsChange = async (newPerPage, page) => {
      setPerPage(newPerPage);
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <DataTable
            columns={columns}
            data={items}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
          />
        </div>
      );
    }
}

export default IniTableData