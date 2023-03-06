import React from 'react';
import "./data.css";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
function Data() {
    return (
      <div className="data">
       <div className='data-header'>
       <div className='data-headerLeft'>
        <p>My Drive</p>
         <ArrowDropDownIcon/>
       </div>
       <div className='data-headerRight'>
         <ListOutlinedIcon/>
         <InfoOutlinedIcon/>
       </div>
       </div>
       <div className='data-content'>
        <div className='data-grid'>
            <div className='data-file'>
                <InsertDriveFileIcon/>
                <p>File Name</p>
            </div>
            <div className='data-file'>
                <InsertDriveFileIcon/>
                <p>File Name</p>
            </div>
            <div className='data-file'>
                <InsertDriveFileIcon/>
                <p>File Name</p>
            </div>
            

        </div>
        <div className='data-list'>
           <div className='detailsRow'>
            <p><b>Name <ArrowDownwardIcon/></b></p>
            <p><b>Owner </b></p>
            <p><b>Last Modified </b></p>
            <p><b>File size </b></p>
            </div> 
            <div className='detailsRow'>
            <p>Name <InsertDriveFileIcon/></p>
            <p>Me </p>
            <p>Yesterday</p>
            <p>1 GB </p>
            </div> 
        </div>
       </div>
      </div>
    );
  }
  
  export default Data;