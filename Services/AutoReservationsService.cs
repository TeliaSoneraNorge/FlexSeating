using FlexSeating.Models;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FlexSeating.Services
{
    public class AutoReservationsService : IHostedService, IDisposable
    {
        private Timer _timer;

        public AutoReservationsService()
        {
        }

        public Task StartAsync(CancellationToken stoppingToken)
        {
            _timer = new Timer(UpdateAutoReservations, null, TimeSpan.Zero,
                TimeSpan.FromSeconds(5));

            return Task.CompletedTask;
        }

        private void UpdateAutoReservations(object state)
        {
            //Get json from rest api
            var IpToMacActiveUsers = new Dictionary<string, string>();
            var macToUser = new Dictionary<string, string>();
            foreach(var ipMac in IpToMacActiveUsers)
            {
                var activeUser = macToUser[ipMac.Value];
                var userIpAddress = ipMac.Key;
                var desk = new Desk();
                using(var db = new FlexSeatingContext())
                {
                    desk = db.Desk.Where(x => x.IpAddress == userIpAddress).FirstOrDefault();
                }
                if(desk.Reservations.Count == 0)
                {
                    desk.Reservations.Add(new Reservations()
                    {
                        Date = DateTime.Now,
                        UserId = activeUser,
                        DeskId = desk.Id,
                        Desk = desk
                    });
                }                
            }
        }

        public Task StopAsync(CancellationToken stoppingToken)
        {
            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
