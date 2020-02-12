using System;
using System.Collections.Generic;
using FlexSeating.Models;
using FlexSeating.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlexSeating.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildingsController : ControllerBase
    {
        private readonly IFlexSeatPlannerRepository _flexSeatPlannerRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly string _user = "";
        public BuildingsController(IFlexSeatPlannerRepository flexSeatPlannerRepository, IHttpContextAccessor httpContextAccessor)
        {
            _flexSeatPlannerRepository = flexSeatPlannerRepository;
            _httpContextAccessor = httpContextAccessor;
            _user = _httpContextAccessor.HttpContext.User.Identity.Name;
        }

        [HttpGet]
        public IEnumerable<Building> GetBuildings(DateTime date)
        {
            return _flexSeatPlannerRepository.GetBuildings(date);
        }

        [HttpGet]
        [Route("user")]
        public string GetName()
        {
            return _user;
        }

        [HttpGet]
        [Route("{id}")]
        public Building GetBuilding(int id)
        {
            return _flexSeatPlannerRepository.GetBuilding(id);
        }

        [HttpGet]
        [Route("{buildingId:int}/{floorId:int}")]
        public Floor GetBuildingFloor(int floorId)
        {
            return _flexSeatPlannerRepository.GetFloor(floorId);
        }

        [HttpPost]
        [Route("{buildingId:int}/{floorId:int}/{deskId:int}/{date}")]
        public void ReserveDesk(int deskId, string date)
        {
            _flexSeatPlannerRepository.ReserveDesk(deskId, _user, DateTime.Parse(date));
        }

        [HttpPost]
        [Route("reservations/{reservationId}")]
        public void CancelReserveDesk(int reservationId)
        {

            _flexSeatPlannerRepository.CancelReservation(reservationId, _user);
        }
    }
}