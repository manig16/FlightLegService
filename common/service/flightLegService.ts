import { Context } from "@azure/functions";
import { FlightLeg } from "../model/FlightLeg";
import { getYYYYMMddHHmm } from "../util/dateUtil";
import { validateFlightLeg } from "../validator/flightLegValidator";
import { createFlightLegDao } from "../dao/flightLegDao";

export async function createFlightLeg(fleg: FlightLeg, context: Context) {
    context.log(`flightLegService::createFlightLeg. Creating flightLeg`)
    prepareFlightLeg(fleg)
    await validateFlightLeg(fleg)
    const createdItem = await createFlightLegDao(fleg)
    if(createdItem) {
        context.log(`FlightLegService::createFlightLeg() flightLeg with id: ${createdItem.id} is created`);
    }
}

async function prepareFlightLeg(fleg: FlightLeg) {
    fleg.id = fleg.airline.iataCode + fleg.flightNumber + 
        '_' + fleg.departureAirport.iataCode +
        '_' + fleg.arrivalAirport.iataCode + 
        '_' + getYYYYMMddHHmm(fleg.std)
    fleg.partitionKey = fleg.id
}