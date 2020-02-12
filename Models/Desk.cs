using System;
using System.Collections.Generic;

namespace FlexSeating.Models
{
    public partial class Desk
    {
        public Desk()
        {
            Reservations = new HashSet<Reservations>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int FloorId { get; set; }
        public string IpAddress { get; set; }

        public virtual Floor Floor { get; set; }
        public virtual ICollection<Reservations> Reservations { get; set; }
    }
}
