export interface FlightLeg {
    airline: Airline;
    flightNumber: number;
    departureAirport: Airport;
    arrivalAirport: Airport;
    std: Date;
    sta: Date;
    status: StatusEnum;
    departureTerminal?: string;
    departureGate?: string;
    arrivalTerminal?: string;
    arrivalGate?: string;
    baggageClaim?: string;
    etd?: Date,
    eta?: Date;
    atd?: Date;
    ata?: Date;
    aircraft?: Aircraft;
    diversionStatus?: DiversionStatusEnum;
    divertedAirport?: Airport;
    altitude?: number;
    speed?: number;
    codeshares?: CodeShare[];
    isOperator?: boolean;
};

export interface Airline {
    iataCode: string;
    icaoCode?: string;
    name?: string;
}

export interface Airport {
    iataCode: string;
    icaoCode?: string;
    name?: string;
}

export interface Aircraft {
    registrationNumber?: string;
    name?: string;
    type?: string;
}

export interface CodeShare {
    airlineCode: string;
    flightNumber?: number;
}

export enum StatusEnum {
    Undefined = "Undefined",
    Scheduled = "Scheduled",
    Proposed = "Proposed",
    Departed = "Departed",
    Enroute = "Enroute",
    Landed = "Landed",
    AtGate = "AtGate",
    Cancelled = "Cancelled"
}

export enum DiversionStatusEnum {
    Undefined = 0,
    Diverted = 1,
    Recovery = 2
}