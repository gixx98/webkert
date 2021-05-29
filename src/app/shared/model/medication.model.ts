import {status} from "./enums/_status.enum";
import {category} from "./enums/_category.enum";
import {actor} from "./enums/_actor.enum";
import { effective } from "./interfaces/_effective.interface"

export interface Medication {
    id?: string,
    instantiates?: string[],
    partOf?: string[],
    // in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
    status: status,
    statusReason?: string,
    // Indicates where the medication is expected to be consumed or administered.
    category: category,
    // What was administered
    medication: string,
    // Who received medication
    subject: string,
    context?: string,
    supportingInformation?: string[],
    // Start and end time of administration
    effective: effective,
    // Who performed the medication administration
    actor: actor,
    reasonCode?: string,
    reasonReference?: string[],
    request?: string,
    device?: string,
    note?: string,
    dosage?: string
}