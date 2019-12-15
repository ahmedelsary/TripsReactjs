using System.Collections.Generic;
using Trips.Data;

namespace Trips.Data{

public interface ITripServise
{
    List<Trip> GetAllTrips();
    Trip GetTripById(int tripId);

    void UpdateTrip(int tripId, Trip trip);
    void DeleteTrip(int tripId);
    void AddTrip(Trip trip);
}

}