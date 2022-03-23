import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { StatusCodes } from "http-status-codes";
import { deleteFlightLeg } from "../common/service/flightLegService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    try {
        const deletedItem = await deleteFlightLeg(req.body, context)
        context.res = {
            status: StatusCodes.OK,
            body: deletedItem
        }
    }
    catch(error) {
        context.log.error(`HTTP trigger function - exception when deleting the flightLeg. ${error.message}`)
        context.res = {
            status: StatusCodes.OK,
            body: error
        }
    }
};

export default httpTrigger;