import { Container, CosmosClient, Database } from '@azure/cosmos'

const endpoint = process.env.AZURE_COSMOSDB_FLIGHTLEG_URI
const key = process.env.AZURE_COSMOSDB_FLIGHTLEG_ACCOUNT_KEY
const dbName = process.env.AZURE_COSMOSDB_FLIGHTLEG_DATABASE_NAME
const container = process.env.AZURE_COSMOSDB_FLIGHTLEG_CONTAINER_NAME

let cosmosClient: CosmosClient = new CosmosClient({ endpoint, key})

export function getClient(): CosmosClient {
    return cosmosClient ?? new CosmosClient({endpoint, key})
}

export function getDatabase(): Database {
    return getClient().database(dbName)
}

export function getContainer(): Container {
    return getDatabase().container(container)
}

