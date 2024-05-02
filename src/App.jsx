import React from 'react'
import Navbar from "./components/Navbar"
import "./App.css"
import Products from "./components/Products"


const App = () => {
 
  return (
    <React.Fragment >
       <Navbar/>
   
      

      <main >
        <section className='main__section'>
      <div className="container">
        <div style={{textAlign:'center'}}>
        <img width={"350px"} height={"270px"} style={{marginLeft:'70px'}} src="https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png" alt="" />
        <p style={{marginBottom:'30px',color:'white'}}>An efficient page animation solution</p>
        <button style={{marginBottom:"60px",padding:'10px',border:'1px solid white',backgroundColor:'transparent',color:'white',textAlign:'center',cursor:'pointer'}}>Learn More</button>
        </div>
     
      
      </div>
      
        </section>
      
       <section className='services__section'>
       <Products/>
       </section>

   
      </main>
    </React.Fragment>
  )
}

export default App

