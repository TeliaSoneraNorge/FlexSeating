using System;
using System.Collections.Generic;

namespace FlexSeating.Models
{
    public partial class Reservations
    {
        public int Id { get; set; }
        public int DeskId { get; set; }
        public string UserId { get; set; }
        public DateTime Date { get; set; }

        public virtual Desk Desk { get; set; }
    }
}
