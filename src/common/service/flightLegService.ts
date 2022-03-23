import { Context } from "@azure/functions";
import { FlightLeg } from "../model/FlightLeg";
import { getYYYYMMddHHmm } from "../util/dateUtil";
import { validateFlightLeg } from "../validator/flightLegValidator";
import { createFlightLegDao, deleteFlightLegDao, getFlightLegDao, updateFlightLegDao } from "../dao/flightLegDao";
import { prepareFlightLeg } from "../util/flightLegUti";

export async function createFlightLeg(fleg: FlightLeg, context: Context) {
    context.log(`flightLegService::createFlightLeg() flightLeg creation started`)
    prepareFlightLeg(fleg)
    await validateFlightLeg(fleg)
    const createdItem = await createFlightLegDao(fleg)
    if(createdItem) {
        context.log(`flightLegService::createFlightLeg() flightLeg with id: ${createdItem.id} is created`);
    }
}

export async function getFlightLegById(flegId: string, context: Context) {
    const item = await getFlightLegDao(flegId)
    var log = `flightLegService::getFlightLeg() flightLeg is `
    log += (item == null) ?  `not` : ``
    log += ` found for ${flegId}`
    context.log(log)
}

export async function updateFlightLeg(fleg: FlightLeg, context: Context) {
    prepareFlightLeg(fleg)
    await validateFlightLeg(fleg)
    return await updateFlightLegDao(fleg)
}

export async function deleteFlightLeg(fleg: FlightLeg, context: Context) {
    return await deleteFlightLegDao(fleg)
}