using FlexSeating.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace FlexSeating.Repository
{
    public class FlexSeatPlannerRepository: IFlexSeatPlannerRepository
    {
        public List<Building> GetBuildings(DateTime now)
        {
            using (var dbContext = new FlexSeatingContext())
            {
                var date = new DateTime(now.Year, now.Month, now.Day);

                var todayReservations = dbContext.Reservations.Where(x => x.Date == date).ToList();
                var buildings = dbContext.Building
                    .Include(x => x.Floor)
                    .ThenInclude(y => y.Desk)
                    .ToList();

               


                foreach(var b in buildings)
                {
                    foreach(var f in b.Floor)
                    {
                        f.Desk = f.Desk.OrderBy(x => x.Name).ToList();
                        foreach(var d in f.Desk)
                        {
                            foreach(var r in todayReservations)
                            {
                                if(r.DeskId == d.Id)
                                {
                                    d.Reservations.Add(r);
                                }
                            }
                        }
                    }
                }

                return buildings;
            }
        }

        public Building GetBuilding(int buildingId)
        {
            using (var dbContext = new FlexSeatingContext())
            {
                return dbContext.Building.Include(x => x.Floor).Where(x => x.Id == buildingId).FirstOrDefault();
            }
        }

        public Floor GetFloor(int floorId)
        {
            using (var dbContext = new FlexSeatingContext())
            {
                return dbContext.Floor.Where(x => x.Id == floorId).FirstOrDefault();
            }
        }

        public void ReserveDesk(int deskId, string user, DateTime date)
        {
            using (var dbContext = new FlexSeatingContext())
            {
                var num = dbContext.Reservations.Where(x => (x.Date == date && x.UserId == user)).Count();
                if(num == 0)
                {
                    var res = new Reservations()
                    {
                        DeskId = deskId,
                        UserId = user,
                        Date = date
                    };
                    dbContext.Reservations.Add(res);
                    dbContext.SaveChanges();
                }                
            }
        }

        public void CancelReservation(int reservationId, string user)
        {
            using (var dbContext = new FlexSeatingContext())
            {
                var res = dbContext.Reservations.Where(x => x.Id == reservationId).FirstOrDefault();
                if(res != null && user == res.UserId)
                {
                    dbContext.Reservations.Remove(res);
                }

                dbContext.SaveChanges();
            }
        }
    }
}
