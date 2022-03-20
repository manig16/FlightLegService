import { getContainer } from "../client/cosmosdbClient";
import { FlightLeg } from "../model/FlightLeg";


export async function createFlightLegDao(fleg: FlightLeg) {
    const { resource } = await getContainer().items.create(fleg)
    return resource
}