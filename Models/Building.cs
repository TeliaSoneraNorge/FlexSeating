using System;
using System.Collections.Generic;

namespace FlexSeating.Models
{
    public partial class Building
    {
        public Building()
        {
            Floor = new HashSet<Floor>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ImageUrl { get; set; }

        public virtual ICollection<Floor> Floor { get; set; }
    }
}
