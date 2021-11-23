import React from 'react'
import axios from 'axios'



class View extends React.Component{
    constructor(props){
        super(props);

        this.onUpdate = this.onUpdate.bind(this)

        this.state = {
            table:{
                size:6,
                quantity:10
            },
            tables:[]
        }
    }

    onUpdate(e){
        this.setState({
            table: e.target.value
        })
    }

    componentDidMount(){
        axios.get('http://localhost:5000/tables/')
        .then(res =>{
            if(res.data.length >0){
                this.setState({
                    tables: res.data.map(tables => tables),
                    table:{
                        size:res.data[0].size,
                        quantity:res.data[0].quantity
                    }
                })
            }else{
                console.log(`err`)
            }

            console.log(`${this.state.table.size}`)
            console.log(`${this.state.table.quantity}`)
        })
        
    }


    render(){
        return(
            <div>
                <p>view page: </p>
                <div>
                    <lu>{
                    this.state.tables.map( function(table){
                        return(
                            <li key={table} value={table}>Table size: {table.size}
                                <ul>
                                    <li> Remaining tables: {table.quantity}</li>
                                </ul>
                            </li>
                        )
                    }
                    )}</lu>
                </div>
            </div>
        )
    }
}

export default View;