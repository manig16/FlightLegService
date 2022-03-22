import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { StatusCodes } from "http-status-codes";
import { updateFlightLeg } from "../common/service/flightLegService";
import { getFlightLeg } from "../common/util/flightLegUti";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const fleg = req.body
    try {
        context.log(`HTTP trigger function - preparing to update flight leg for ${getFlightLeg(fleg)}`);
        const updatedItem = await updateFlightLeg(fleg, context)
        context.res = {
            status: StatusCodes.OK,
            body: updatedItem
        }
    }
    catch(error) {
        context.log.error(`HTTP trigger function - exception when updating the flightLeg. ${error.message}`)
        context.res = {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            body: error
        }
    }
};

export default httpTrigger;