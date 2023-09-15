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
export const RestApiTargetStatus = {
    Disabled: 'Disabled',
    Enabled: 'Enabled'
} as const;
export type RestApiTargetStatus = typeof RestApiTargetStatus[keyof typeof RestApiTargetStatus];


export function RestApiTargetStatusFromJSON(json: any): RestApiTargetStatus {
    return RestApiTargetStatusFromJSONTyped(json, false);
}

export function RestApiTargetStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestApiTargetStatus {
    return json as RestApiTargetStatus;
}

export function RestApiTargetStatusToJSON(value?: RestApiTargetStatus | null): any {
    return value as any;
}

