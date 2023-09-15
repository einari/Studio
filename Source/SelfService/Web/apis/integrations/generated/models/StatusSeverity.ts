/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const StatusSeverity = {
    Success: 'Success',
    Waiting: 'Waiting',
    Warning: 'Warning',
    Error: 'Error',
    Unknown: 'Unknown',
    Information: 'Information',
    None: 'None'
} as const;
export type StatusSeverity = typeof StatusSeverity[keyof typeof StatusSeverity];


export function StatusSeverityFromJSON(json: any): StatusSeverity {
    return StatusSeverityFromJSONTyped(json, false);
}

export function StatusSeverityFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusSeverity {
    return json as StatusSeverity;
}

export function StatusSeverityToJSON(value?: StatusSeverity | null): any {
    return value as any;
}

