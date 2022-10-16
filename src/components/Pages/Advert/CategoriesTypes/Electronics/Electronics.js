import React from 'react'
import'./electronics.css'
const Electronics = () => {
  return (
    <div>
       <h3>Electronics</h3> 
       <div >
        <div className='electronics-container'>
            <div>
                    <h4>Phones</h4>
                    <hr></hr>
                    <ul>
                        <li>Xiaomi</li>
                        <li>Oppo</li>
                        <li>Tecno</li>
                        <li>Apple</li>
                        <li>Blackberry</li>
                        <li>LG</li>
                        <li>HTC</li>
                        
                    </ul>
            </div>
            <div>
                        <h4>Computers</h4>
                        <hr></hr>
                      <ul>
                        <li>Dell</li>
                        <li>HP</li>
                        <li>Acer</li>
                        <li>Lenovo</li>
                        <li>Asus</li>
                        <li>Apple</li>

                    </ul>
            </div>
          </div>
       </div>
       
    </div>
  )
}

export default Electronics