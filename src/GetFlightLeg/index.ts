import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { StatusCodes } from "http-status-codes";
import { getFlightLegById } from "../common/service/flightLegService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const flegId = context.bindingData.flegId
    context.log(`HTTP trigger function - preparing to get flight leg for ${(flegId)}`);
    try {
        const item = await getFlightLegById(flegId, context)
        if(item != null) {
            context.res = {
                status: StatusCodes.OK,
                body: item
            }
        }
   }
   catch(error) {
        context.log.error(`HTTP trigger function - exception when getting the flightLeg. ${error.message} `)
        context.res = {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            body: error
        }
   }
   
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;