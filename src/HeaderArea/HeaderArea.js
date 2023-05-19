import React from 'react';
import {FaHome,FaTable,FaNewspaper} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import {MdNotifications} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiVirtualbox}from 'react-icons/si'
import {BsGlobe,BsJournalBookmark} from 'react-icons/bs'
import {BiBookContent} from 'react-icons/bi'

import coin from './images/coin.jpg'
import user from './images/user.jpg'
import client from './images/client.jpg'
import cart from './images/cart.jpg';
import sales from './images/sales.jpeg'
import side from './images/side.jpeg'
import file from './images/file.jpeg'

import si from './images/si.jpeg'
import {BsLaptop} from 'react-icons/bs'

import './HeaderArea.css'

function HeaderArea(){
    return(
        <body>
            <div className='HeaderArea'>
                <div className='Header'>
                    <header className='header' color='white'>
                    <FaHome color='white'/> <div style={{color:'white'}}> / Dashboard</div>
                    </header>
                    <div style={{color:'white',marginLeft:"-20%"}}>
                       <GiHamburgerMenu  />
                       </div>
                  
                    <div style={{color:'white',fontWeight: 'bold',marginLeft:"-35%",marginTop:"-1%"}}>Dashboard</div>
                    <div className='Search' style={{height:"20%",marginLeft:"0%",marginTop:"-2%"}}>
                        <input type='search' placeholder='🔍Type here...'></input>
                    </div>
                    <div className='Icon'>
                        <div className='icon'>
                            <CgProfile color='white'/><div div style={{color:'white',marginTop:"-70%",marginLeft:"82%"}}>Sign</div>
                          <div style={{color:'white',marginTop:"-65%",marginLeft:"232%"}}>  <FiSettings color='white'/></div>
                          <div style={{color:'white',marginTop:"-65%",marginLeft:"322%"}}>  <MdNotifications color='white'/> </div>
                        </div>
                    </div>
                    <div className='container' style={{display:"flex",marginTop:"3%"}}>
                        <div className='con1' style={{backgroundColor:"white",borderRadius:"8%",width:"13%",height:"4.5rem",marginLeft:"32%"}}>   <img  style={{borderRadius:"50%",height:"50%",width:"20%",marginLeft:"57%",marginTop:"5%"}} src ={coin} alt="thi" />
                   <p style={{fontSize:"80%",marginLeft:"-40%",marginTop:"-22%"}}> TODAY'S MONEY </p>  <h5 style={{marginTop:'-7%',marginLeft:"-45%"}}>$53,000</h5> <p style={{marginLeft:'-55%',marginTop:"-10%",fontSize:"80%",color:"green",fontWeight:"bold"}}>-55%</p>  <p style={{marginLeft:'9%',marginTop:"-15%",fontSize:"80%"}}>since yesterday</p>
                          
                           
                        </div>
                        <div className='con2' style={{backgroundColor:"white",borderRadius:"8%",width:"13%",height:"4.5rem",marginLeft:"2%"}}>    <img  style={{borderRadius:"50%",height:"50%",width:"20%",marginLeft:"57%",marginTop:"5%"}} src ={user} alt="thi" />
                        <p style={{fontSize:"80%",marginLeft:"-40%",marginTop:"-22%"}}> TODAY'S USERS </p>  <h5 style={{marginTop:'-7%',marginLeft:"-45%"}}>2,300</h5> <p style={{marginLeft:'-55%',marginTop:"-10%",fontSize:"80%",color:"green",fontWeight:"bold"}}>+3%</p>  <p style={{marginLeft:'9%',marginTop:"-15%",fontSize:"80%"}}>since last week</p>
                        </div>
                        <div className='con3' style={{backgroundColor:"white",borderRadius:"8%",width:"13%",height:"4.5rem",marginLeft:"2%"}}>   <img  style={{borderRadius:"50%",height:"50%",width:"20%",marginLeft:"57%",marginTop:"5%"}} src ={client} alt="thi" />
                        <p style={{fontSize:"80%",marginLeft:"-40%",marginTop:"-22%"}}> NEW CLIENTS </p>  <h5 style={{marginTop:'-7%',marginLeft:"-45%"}}>+3,462</h5> <p style={{marginLeft:'-55%',marginTop:"-10%",fontSize:"80%",color:"red",fontWeight:"bold"}}>-2%</p>  <p style={{marginLeft:'9%',marginTop:"-15%",fontSize:"80%"}}>since last quarter</p>
                        </div>
                        <div className='con4' style={{backgroundColor:"white",borderRadius:"8%",width:"13%",height:"4.5rem",marginLeft:"2%"}}> <img  style={{borderRadius:"50%",height:"50%",width:"20%",marginLeft:"57%",marginTop:"5%"}} src ={cart} alt="thi" />
                        <p style={{fontSize:"80%",marginLeft:"-40%",marginTop:"-22%"}}> SALES </p>  <h5 style={{marginTop:'-7%',marginLeft:"-45%"}}>$103,430</h5> <p style={{marginLeft:'-55%',marginTop:"-10%",fontSize:"80%",color:"green",fontWeight:"bold"}}>+5%</p>  <p style={{marginLeft:'9%',marginTop:"-15%",fontSize:"80%"}}>than last month</p>
                        </div>
                    </div>

  <div className="sale">
  <img  style={{height:"100%",width:"101%",marginTop:"2%"}} src ={sales} alt="thi" />
  </div>

  <div className="side">
  <img  style={{height:"100%",width:"101%"}} src ={side} alt="thi" />
  </div>

<div className="sidebar">
    <div classname="up">
    <img  style={{height:"5%",width:"100%"}} src ={si} alt="thi" />
    </div>
<div className="ii">
<BsLaptop color="blue" fontSize="220%" /><div style={{marginLeft:"43%",borderRadius:"4%",fontSize:"120%" , marginTop:"-7%",height:"3.6rem",backgroundColor:"rgb(205, 245, 248)",width:"54%"}}>Dashboard</div>
<FaTable color="orange"/><div style={{marginLeft:"17%" , marginTop:"-4%",height:"3.6rem"}}>Tables</div>
<FaNewspaper  color="green"/><div style={{marginLeft:"17%" , marginTop:"-4%",height:"3.6rem"}}>Billing</div>
<SiVirtualbox color="rgb(0, 208, 255)"/><div style={{marginLeft:"22%" , marginTop:"-4%",height:"3.6rem"}}>Virtual Reality</div>
<BsGlobe color="red"/><div style={{marginLeft:"15%" , marginTop:"-4%",height:"3.6rem"}}>RTL</div>
<div style={{marginLeft:"21%" , marginTop:"-2%",height:"3.6rem",color:'grey',fontWeight: 'bold'}}>ACCOUNT PAGES</div>
<CgProfile color="black"/><div style={{marginLeft:"15%" , marginTop:"-4%",height:"3.6rem"}}>Profile</div>
<BiBookContent color="orange"/><div style={{marginLeft:"15%" , marginTop:"-4%",height:"3.6rem"}}>Sign In</div>
<BsJournalBookmark color="rgb(0, 208, 255)"/><div style={{marginLeft:"15%" , marginTop:"-4%",height:"3.6rem"}}>Sign Up</div>
<img  style={{height:"6.2rem",width:"25%",marginLeft:"40%"}} src ={file} alt="thi" />
</div>
</div>


                </div>
            </div>
        </body>
    )
}
export default HeaderArea;