import { getContainer } from "../client/cosmosdbClient";
import { FlightLeg } from "../model/FlightLeg";


export async function createFlightLegDao(fleg: FlightLeg) {
    const { resource } = await getContainer().items.create(fleg)
    return resource
}

export async function getFlightLegDao(flegId: string) {
    const queryWithParams = {
        query: "SELECT * from FlightLeg f WHERE f.id=@id",
        parameters: [
            {
                name: "@id",
                value: flegId,
            }
        ]
    }
    const { resources } = await getContainer().items.query(queryWithParams).fetchAll()
    return resources.length > 0 ? resources[0] : null
}

export async function updateFlightLegDao(fleg: FlightLeg) {
    return await getContainer().item(fleg.id, fleg.partitionKey).replace(fleg)
}