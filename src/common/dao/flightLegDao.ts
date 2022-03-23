import { getContainer } from "../client/cosmosdbClient";
import { FlightLeg } from "../model/FlightLeg";


export async function createFlightLegDao(fleg: FlightLeg) {
    return await getContainer().items.create(fleg)
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

export async function deleteFlightLegDao(fleg: FlightLeg) {
    return await getContainer().item(fleg.id, fleg.partitionKey).delete()
}