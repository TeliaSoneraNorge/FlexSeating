using System;
using System.Collections.Generic;

namespace FlexSeating.Models
{
    public partial class Floor
    {
        public Floor()
        {
            Desk = new HashSet<Desk>();
        }

        public int Id { get; set; }
        public int BuildingId { get; set; }
        public int Number { get; set; }

        public virtual Building Building { get; set; }
        public virtual ICollection<Desk> Desk { get; set; }
    }
}
