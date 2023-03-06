import React from "react"; 
import "./header.css";
import Logo from "./image/logo.png";
//import SearchIcon from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Header(){
    return(
        <div class="header">
            <div className="header_logo">
            <img src={Logo} width={40} height={40}/>
            <br/>
            <span>Drive</span>
            

            </div>
            <div className="header_search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="search in drive"/>
            <FormatAlignCenterOutlinedIcon/>
            </div>
            <div className="header_option">
            <span>
           <HelpOutlineOutlinedIcon/>
           </span>
           <span>
           <SettingsOutlinedIcon/>
           </span>
           <span>
           <AppsOutlinedIcon/>
            </span>
            <span>
            <AccountCircleOutlinedIcon/>
            </span>
            </div>
         
        </div>

    );
}
export default Header;