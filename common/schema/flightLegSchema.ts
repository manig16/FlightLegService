import Joi from "joi";
import { DiversionStatusEnum, StatusEnum } from "../model/FlightLeg";


export const airlineSchema = Joi.object({
       iataCode: Joi.string().required().pattern(/^[a-zA-Z0-9]{2}$/),
        icaoCode: Joi.string().optional().allow(null).allow("").pattern(/^[a-zA-Z0-9]{3}$/),
        name: Joi.string().optional(),
})

export const airportSchema = Joi.object({
        iataCode: Joi.string().required().pattern(/^[a-zA-Z0-9]{3}$/),
        icaoCode: Joi.string().optional().allow(null).allow("").pattern(/^[a-zA-Z0-9]{4}$/),
        name: Joi.string().optional(),
})

export const aircraftSchema = Joi.object({
        registrationNumber: Joi.string().optional().pattern(/^[a-zA-Z0-9\-]{4,8}$/),
        icaoCode: Joi.string().optional().allow(null).allow("").pattern(/^[a-zA-Z0-9]{4}$/),
        name: Joi.string().optional(),
})

export const codeshareSchema = Joi.object({
        airlineCode: Joi.string().required().pattern(/^[a-zA-Z0-9]{2,3}$/),
        flightNumber: Joi.number().optional().allow(null).integer().min(1).max(4),

})

export const flightLegSchema = Joi.object().keys({
        airline: airlineSchema.required(),
        flightNumber: Joi.number().required().integer().min(1).max(9999),
        departureAirport: airportSchema.required(),
        arrivalAirport: airportSchema.required(),
        std: Joi.date().required(),
        sta: Joi.date().required(),
        status: Joi.string().valid(...Object.values(StatusEnum)),
        departureTerminal: Joi.string().optional().pattern(/^[a-zA-Z0-9\-]*$/),
        departureGate: Joi.string().optional().pattern(/^[a-zA-Z0-9\-]*$/),
        arrivalTerminal: Joi.string().optional().pattern(/^[a-zA-Z0-9\-]*$/),      
        arrivalGate: Joi.string().optional().pattern(/^[a-zA-Z0-9\-]*$/),
        baggageClaim: Joi.string().optional().pattern(/^[a-zA-Z0-9\-]*$/),
        etd: Joi.date().optional(),
        eta: Joi.date().optional(),
        atd: Joi.date().optional(),
        ata: Joi.date().optional(),
        aircraft: aircraftSchema.optional(),
        diversionStatus: Joi.string().valid(...Object.values(DiversionStatusEnum)),
        divertedAirport: airportSchema.optional(),
        altitude: Joi.number().optional().allow(null).integer().min(1).max(5),
        speed: Joi.number().optional().allow(null).integer().min(1).max(4),
        codeshares: Joi.array().optional().items(airlineSchema),
        isOperator: Joi.boolean().optional(),
    })