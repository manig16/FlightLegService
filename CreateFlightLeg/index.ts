import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { createFlightLeg } from "../common/service/flightLegService";
import { StatusCodes } from 'http-status-codes'
import { getFlightLeg } from "../common/util/flightLegUti";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const fleg = req.body
    context.log(`HTTP trigger function - preparing to create flight leg for ${getFlightLeg(fleg)}`);
    try {
        const createdItem = await createFlightLeg(fleg, context)
        context.res = {
            status: StatusCodes.OK,
            body: createdItem
        }
    }
    catch(error) {
        context.log.error(`HTTP trigger function - exception when creating the flightLeg. ${error.message}`)
        context.res = {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            body: error
        }
    }
};

export default httpTrigger;