import React from 'react'
import "./Home.css"
import "./App.css"
import "./graph.css"
import Product from './Product'
import GraphData from './graphData'


function Home(){
    return (
        <div className="home">
            <div className="tablom">         
                <Product/>
                <GraphData/>
            </div>    
        </div>
    )
}

export default Home 