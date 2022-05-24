import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css"
import Graph from "./graph";
import { Popup, Button } from "semantic-ui-react";

class GraphData extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            items:[],
            isLoaded:false,  
            sayfa:"grafik",
        }
    }

    
    sayfaDegistir=(gelen)=>{
        this.setState({sayfa:gelen})
    }
    componentDidMount() { 
              console.log('geldi!')  
        axios.get('http://localhost:3003/carPower').then((res)=>{
            console.log(res);
            this.setState({
                isLoaded: true, 
                items: res.data,
            })
        }).catch((err)=>{console.log(err)})
    }

    render() {
        var { isLoaded, items,sayfa } = this.state;
        if (!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return(
            <div>
                
                
                {(sayfa==='grafik')&&
                <div>
                    <Button onClick={()=>this.sayfaDegistir('açıklama')}>Açıklama göster</Button>
                    <Graph hPower={items}/>
                </div>}
                

                {(sayfa==='açıklama')&&
                <div>                    
                    Açıklama Sayfasına Hoşgeldiniz
                    
                    <Button onClick={()=>this.sayfaDegistir('grafik')}>Grafik göster</Button>
                </div>}
                  
            </div>
            );
        }    
    }
}

export default GraphData;