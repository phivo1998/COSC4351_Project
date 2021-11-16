import React from 'react'
import axios from 'axios'
import View from './View'
//handle cancel
//handle traffic
//handle reservation quantity checks
//hande DB reservation finalization
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:0, 
            error: '', 
            table_id:[],
            tables_quantity:[],
            reserved:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:5000/tables/')
        .then(res =>{
            if(res.data.length >0){
                this.setState({
                    table_id: res.data.map(tables => tables.__id),
                    tables_quantity: res.data.map(tables => tables.quantity)
                    
                    
                })
            }else{
                console.log(`err`)
            }
        })
    }

    handleChange = (event) =>{
        const target = event.target;
        const guest_num = target.value;
        
        if(guest_num < 0){
            this.setState({error:"This number needs to be greater than zero"})
        }else{
            this.setState({value:guest_num, error:''})
        }

        
        
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        
        this.setState({value: Number(this.element.value)})
        if(this.state.value === 0){
            alert(`Cannot reserve for a party of 0`)
            return window.location ='/'
        }
        alert(`The value submitted was ${this.element.value}`)
        //alert(`Second incoming alert`)
        var guest_num  = Number(this.element.value)
        //check to see how many tables are left *and what times are available* -> dine estimation are between 1:30 to 2:00 hours
        
        //hold tables for guests
        var i = 0
       
        while(guest_num > 0){
            switch(i){
                case 0:
                    var tables_of_eight = Math.floor(guest_num/8)
                    var total_tables_of_eight = this.state.table_quantity[0]
                    while(total_tables_of_eight > 0 && tables_of_eight > 0){
                        total_tables_of_eight -= 1
                        tables_of_eight -= 1
                        
                    }
                    //signifies table 8 max has been reached
                    if(tables_of_eight > 0){
                        guest_num += (tables_of_eight*8)
                        //mark table size 8 quantity to zero
                        const quantity ={
                            quantity:0
                        }
                        var temp_id = this.state.table_id[0]
                        axios.post('http://localhost:5000/tables/update/'+temp_id,quantity)
                        .then(res=>{
                            console.log(res)
                        })
                        
                    }else{ //table size has not reached 0, update remaining quantity
                        const quantity ={
                            qantity: total_tables_of_eight 
                        }
                        var temp_id = this.state.table_id[0]
                        axios.post('http://localhost:5000/tables/update/'+temp_id,quantity)
                        .then(res=>{
                            console.log(res)
                        })

                    }
                    
                case 1:
                    var tables_of_six = Math.floor(guest_num/6)
                    var total_tables_of_six = this.state.table_id[1]
                    while(total_tables_of_six > 0 && tables_of_six >0){
                        total_tables_of_six -= 1
                        tables_of_six -=1
                    }

                    if(tables_of_six >0){

                    }
                    
                case 2:
                
                case 3:

            }

            i+=1
            
        }
        

        
        
        if(guest_num >= 8){

        }else if(guest_num >=6){

        }else if(guest_num >=4){

        }else{

        }

        //once reservation finalized -> create create reservation in database

        // axios.post('https://localhost:5000/tables/update/:id',value)
        // .then(res => console.log(res.data))

        window.location = '/'
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label for="Number of Guests">Table Size:</label>
            <input type="number" min={0} ref={value =>{ this.element = value}} defaultValue={0} onChange={this.handleChange}/>
            <input type="submit" value="Submit"></input>
            </form>
            {this.state.value}
            <div>
                <lu>
                    {this.state.table_id.map(function(table_id){
                        return(
                            <li key={table_id} value={table_id}> {table_id}</li>
                        )
                    })}
                </lu>
            </div>
            
            <View/>
        </div>
        )
    }
}



export default MyComponent;

