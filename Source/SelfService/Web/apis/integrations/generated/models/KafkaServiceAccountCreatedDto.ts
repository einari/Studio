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

import { exists, mapValues } from '../runtime';
import type { AccountAccess } from './AccountAccess';
import {
    AccountAccessFromJSON,
    AccountAccessFromJSONTyped,
    AccountAccessToJSON,
} from './AccountAccess';

/**
 * 
 * @export
 * @interface KafkaServiceAccountCreatedDto
 */
export interface KafkaServiceAccountCreatedDto {
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCreatedDto
     */
    serviceAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCreatedDto
     */
    createdBy?: string;
    /**
     * 
     * @type {AccountAccess}
     * @memberof KafkaServiceAccountCreatedDto
     */
    accountAccess?: AccountAccess;
    /**
     * 
     * @type {Date}
     * @memberof KafkaServiceAccountCreatedDto
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCreatedDto
     */
    description?: string | null;
}

/**
 * Check if a given object implements the KafkaServiceAccountCreatedDto interface.
 */
export function instanceOfKafkaServiceAccountCreatedDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KafkaServiceAccountCreatedDtoFromJSON(json: any): KafkaServiceAccountCreatedDto {
    return KafkaServiceAccountCreatedDtoFromJSONTyped(json, false);
}

export function KafkaServiceAccountCreatedDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): KafkaServiceAccountCreatedDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serviceAccountName': !exists(json, 'serviceAccountName') ? undefined : json['serviceAccountName'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'accountAccess': !exists(json, 'accountAccess') ? undefined : AccountAccessFromJSON(json['accountAccess']),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function KafkaServiceAccountCreatedDtoToJSON(value?: KafkaServiceAccountCreatedDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serviceAccountName': value.serviceAccountName,
        'createdBy': value.createdBy,
        'accountAccess': AccountAccessToJSON(value.accountAccess),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'description': value.description,
    };
}

