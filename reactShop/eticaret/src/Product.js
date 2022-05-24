import React, {useState, useEffect} from "react";
import axios from "axios";
import {Icon, Card, Image, Popup, Message} from "semantic-ui-react"
import "./App.css"
import CardExample from "./CardExample"

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items:[],
            isLoaded:false,  
        }
        
    }

    options=(item)=>{
        console.log(item)
        alert(item.cars);
    }

    
    componentDidMount() {
        console.log('mounted!')  
        axios.get('http://localhost:3003/arabalar').then((res)=>{
            console.log(res);
            this.setState({
                isLoaded: true, 
                items: res.data,
            })
        }).catch((err)=>{console.log(err)})
    }

    render() {

        var { isLoaded, items } = this.state;
        
        if (!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return(
            <div className="tablom">                
                    {items.map(item => (
                        <CardExample onClick={()=>this.options(item)} cars={item.cars} houses={item.houses} testProp="Ahmet"/>
                    )
                    )}  
            </div>
            );
        }
        
    }
}

export default Product;