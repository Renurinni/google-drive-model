import React from "react";
import {useState} from 'react';
import {db,storage} from "./firebase";
import "./sidebar.css";
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import firebase from "firebase";
import Modal from '@mui/material/Modal';
function Sidebar() {
   const [open, setOpen]= useState(false);
   const [uploading,setUploading]= useState(false);
   const [file,setFile]=useState(null);
   const handleClose=()=>{
      setOpen(false);
   }
   const handleOpen=()=>{
      setOpen(true);
   }
   const handleChange=(e)=>{
      if(e.target.files[0])
      {
          setFile(e.target.files[0])
      }

   }
   const handleUpload=(event)=>{
      event.preventDefault();
      setUploading(true);
      storage.ref('files/${file.name}').put(file).then(snapshot=>{
         storage.ref("files").child(file.name).getDownloadURL().then(url=>{
            db.collection("myfiles").add({timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            filename:file.name,
            fileURL : url,
            size:snapshot._delegate.bytesTransferred
         })
         setUploading(false);
         setFile(null);
         setOpen(false);
         }
      )}
   )}
   
  return (
   <>
   <Modal open={open} onClose={handleClose}>
     <div className="modal-pop">
      <form>
         <div className="modalHeading">
            <h3>select file you want to upload</h3>
         </div>
         <div className="modalBody">
            {
               uploading ? (<p className="uploading">Uploading</p>) : (
                  <>
                  <input type="file" onChange={handleChange}/>
            <input type="submit" className="post-submit" onClick={handleUpload}/>
            </>
               )
            }
            
         </div>
      </form>
     </div>
   </Modal>
    <div className="sidebar">
      <div className="sidebar_button">
      <button onClick={handleOpen} variant="contained"> + New </button>
      </div>
      <div className="sidebar-options">
        <div className="sidebar-opt">
           <AddToHomeScreenIcon/>
        <span>My Drive</span>
        </div>
        <div class="sidebar-opt">
           <PhonelinkIcon/>
        <span>Computers</span>
        </div>
        <div class="sidebar-opt">
           <SupervisorAccountIcon/>
        <span>Shared with me</span>
        </div>
        <div class="sidebar-opt">
           <AccessTimeIcon/>
        <span>Recent</span>
        </div>
        <div class="sidebar-opt">
           <StarBorderIcon/>
        <span>Starred</span>
        </div>
        <div class="sidebar-opt">
           <DeleteOutlineIcon/>
        <span>Trash</span>
        </div>
      </div>
<hr/>
<div className="sidebar-options">
        <div class="sidebar-opt">
           <CloudQueueIcon/>
        <span>Storage</span>
        </div>
        <div className="progress-Bar">
            <progress size="tiny" value="50" max="100"/>
            <span>5.4 GB of 15 GB used</span>
        </div>
   </div>
    </div>
    </>
  );
}

export default Sidebar;
