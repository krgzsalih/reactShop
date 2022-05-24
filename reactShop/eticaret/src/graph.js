
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import "./graph.css"

function graph(props) { 
    console.log(" buradaa ",props.hPower );
    
    var data=[];
    props.hPower.map((item,index)=>{
        data.push({name: item.id, uv: item.hPower, pv: 2400, amt: 2400})
    })

    return (
        
        <div className="container">
            <LineChart width={900} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name"/>
                <YAxis />
            </LineChart>
        </div>
    )
    
}

export default graph
