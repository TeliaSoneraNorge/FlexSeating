using FlexSeating.Models;
using System;
using System.Collections.Generic;

namespace FlexSeating.Repository
{
    public interface IFlexSeatPlannerRepository
    {
        List<Building> GetBuildings(DateTime date);
        Building GetBuilding(int buildingId);
        Floor GetFloor(int floorId);
        void ReserveDesk(int deskId, string user, DateTime date);
        void CancelReservation(int reservationId, string user);
    }
}
