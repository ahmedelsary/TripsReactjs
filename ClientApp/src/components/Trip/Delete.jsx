import React,{Component} from 'react';
import axios from 'axios';

export default class Delete extends Component
{
    constructor(props){
        
        super(props);

        this.onCancel=this.onCancel.bind(this);
        this.onConfirm=this.onConfirm.bind(this);

        this.state ={
            name:'',
            description:'',
            dateStarted:null,
            dateCompleted:null    
        }

    }



componentDidMount(){

    const {id} =this.props.match.params;

    axios.get("api/trips/gettrip/"+id).then(
        result =>{
            const trip = result.data;
            this.setState({
                name:trip.name,
                description:trip.description,
                dateStarted: new Date(trip.dateStarted).toISOString().slice(0,10),
                dateCompleted:trip.dateCompleted?new Date(trip.dateStarted).toISOString().slice(0,10):null
            });
        }

    );
}

    onCancel(){
        const {history} =this.props;
        history.push("/trips");
    }
    onConfirm(){
        const {id} =this.props.match.params;
        const {history} =this.props;
        axios.delete('/api/trips/deletetrip/'+id).then(
            result =>{
                history.push("/trips");   
            }
        )

    }
    render(){
        return(
            <div style={{ marginTop: 10 }}>
            <h2>Delete trip confirmation</h2>

            <div class="card">
            <div class="card-body">
                <h4 class="card-title"> {this.state.name} </h4>
                <p class="card-text"> {this.state.description} </p>
                <button onClick={this.onCancel} class="btn btn-default">
                Cancel
                </button>
                <button onClick={this.onConfirm} class="btn btn-danger">
                Confirm
                </button>
            </div>
            </div>
        </div>

        );

    }
}

