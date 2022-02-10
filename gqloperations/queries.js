import { gql } from "@apollo/client";



export const FILTER_TICKETS = gql`

query FlightTickets($filters: FlightTicketFiltersInput) {
    flightTickets(filters: $filters) {
      data {
        id
        attributes {
          Depart_place
          Depart
          Arrival_place
          Arrival
          Price
          Date
        }
      }
      
    }
  }


`