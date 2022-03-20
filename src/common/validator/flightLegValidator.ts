import * as Joi from "joi"
import { FlightLeg } from "../model/FlightLeg";

export async function validateFlightLeg(fleg: FlightLeg) {
    const response = Joi.alternatives().validate(fleg)
    if(response.error) {
        throw new Error(response.error.details[0].message)
    }
}