import { useRef, useState } from 'react';
import './index.css';

function Ctl(props) {

  var pin = useRef()

  useState(()=>{
    pin.current && pin.current.focus()
  },[])

  return (
    <div className='ctl'>
      <input className='pin' type={"password"} ref={pin}/>
      <button className='pingo' onClick={()=>{
        if(pin.current.value=="8379"){
          window.location.pathname="/ser"
        }
      }}/>
    </div>
  )

}

export default Ctl;