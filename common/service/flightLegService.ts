import { Context } from "@azure/functions";
import { FlightLeg } from "../model/FlightLeg";
import { getYYYYMMddHHmm } from "../util/dateUtil";
import { validateFlightLeg } from "../validator/flightLegValidator";
import { createFlightLegDao } from "../dao/flightLegDao";
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