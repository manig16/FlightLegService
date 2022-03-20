import { FlightLeg } from "../model/FlightLeg"
import { getYYYYMMddHHmm } from "./dateUtil"

export function getFlightLeg(fleg: FlightLeg) {
    return fleg.airline.iataCode + fleg.flightNumber + 
        '_' + fleg.departureAirport.iataCode +
        '_' + fleg.arrivalAirport.iataCode + 
        '_' + getYYYYMMddHHmm(fleg.std)
}

export function prepareFlightLeg(fleg: FlightLeg) {
    fleg.id = getFlightLeg(fleg)
    fleg.partitionKey = fleg.id
}