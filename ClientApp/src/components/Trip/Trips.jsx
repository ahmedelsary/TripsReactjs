import React,{Component} from 'react';
import axios from 'axios';

export default class Trips extends Component
{
    constructor(props){
        super(props);
        this.state ={
            trips : [],
            loading : true,
            failed: false,
            error:''
        }

        this.UpdateTrip=this.UpdateTrip.bind(this);
    }


    componentDidMount(){
        this.populateTripData();
    }
    populateTripData(){
        axios.get('api/trips/gettrips').then(result => {
            const response = result.data;
            this.setState({trips:response, loading:false,failed:false,error:''})

        }).catch((error) =>{
            this.setState({trips:[], loading:false,failed:true,error:'there is some error happend'})
        })
        
        ;

    }

    renderAllTripsTable(trips){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.trips.map(
                        trip =>(


                         <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toISOString().slice(0,10)}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0,10):'-'}</td>
                            <td>

                            <div className="form-group">
                               
                            <button  onClick={() => this.UpdateTrip(trip.id)}  className="btn btn-success">Update</button>
                            <button  onClick={() => this.DeleteTrip(trip.id)}  className="btn btn-danger">Delete</button>
                            </div>

                            </td>
                        </tr>

                        )
                    )}
                   
                </tbody>
            </table>
        );
    }

    UpdateTrip(id){
        const {history} = this.props;
        history.push('/update/'+id);
    }

    DeleteTrip(id){
        const {history} = this.props;
        history.push('/delete/'+id);
    }

    render(){

        let content = this.state.loading ?(
            <p>
                <em>Loading...</em>
            </p>
        )


        : ( this.state.failed ? (
            <div className="text-danger">
                <em>{this.state.error}</em>
            </div>
        ) : (
            this.renderAllTripsTable(this.state.trips))
        )        
        return(
            <div>
                <h1>All Trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        );
    }
}

