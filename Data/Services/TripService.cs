using System.Collections.Generic;
using System.Linq;
using Trips.Data;

namespace Trips.Data{

    class TripService : ITripServise
    {
        void ITripServise.AddTrip(Trip trip)
        {
            Data.Trips.Add(trip);
        }

        void ITripServise.DeleteTrip(int tripId)
        {
            var trip =Data.Trips.FirstOrDefault(n => n.Id == tripId);

            if(trip != null){
                Data.Trips.Remove(trip);
            }
        }

        List<Trip> ITripServise.GetAllTrips() =>  Data.Trips.ToList(); 
        

        Trip ITripServise.GetTripById(int tripId) => Data.Trips.FirstOrDefault(n => n.Id == tripId);

        void ITripServise.UpdateTrip(int tripId, Trip trip)
        {
             var oldTrip = Data.Trips.FirstOrDefault(n => n.Id == tripId);
            if(oldTrip != null){
               
               oldTrip.Name = trip.Name;
               oldTrip.Description =trip.Description;
               oldTrip.DateStarted = trip.DateStarted;
               oldTrip.DateCompleted = trip.DateCompleted;

            }
        }
    }

}