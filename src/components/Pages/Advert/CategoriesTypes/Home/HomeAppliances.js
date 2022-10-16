import React from 'react'
import '../Electronics/electronics.css'
const HomeAppliances = () => {
  return (
    <div>
        <h3>Home Appliances</h3>
        <div >
        <div className='electronics-container'>
            <div>
                    <h4>Large Appliances</h4>
                    <hr></hr>
                    <ul>
                        <li>Fridge</li>
                        <li>Washing Machine</li>
                        <li>TV</li>
                        <li>AC</li>
                        <li>Generator</li>
                        <li>Water Dispenser</li>
                        <li>Water Heater</li>
                        
                        
                    </ul>
            </div>
            <div>
                        <h4>Small Appliances</h4>
                        <hr></hr>
                      <ul>
                        <li>Blender</li>
                        <li>Iron</li>
                        <li> Kettle</li>
                        <li> Cooker</li>
                        <li> Oven</li>
                        <li> Toaster</li>

                       

                    </ul>
            </div>
          </div>
       </div>
    </div>
  )
}

export default HomeAppliances