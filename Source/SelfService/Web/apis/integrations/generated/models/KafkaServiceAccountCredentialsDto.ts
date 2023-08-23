/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.292
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TopicAccessDto } from './TopicAccessDto';
import {
    TopicAccessDtoFromJSON,
    TopicAccessDtoFromJSONTyped,
    TopicAccessDtoToJSON,
} from './TopicAccessDto';

/**
 * 
 * @export
 * @interface KafkaServiceAccountCredentialsDto
 */
export interface KafkaServiceAccountCredentialsDto {
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    serviceAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    kafkaUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    description?: string | null;
    /**
     * 
     * @type {Array<TopicAccessDto>}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    topics?: Array<TopicAccessDto> | null;
    /**
     * 
     * @type {Date}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    certificateExpiry?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    certificate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KafkaServiceAccountCredentialsDto
     */
    key?: string | null;
}

/**
 * Check if a given object implements the KafkaServiceAccountCredentialsDto interface.
 */
export function instanceOfKafkaServiceAccountCredentialsDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KafkaServiceAccountCredentialsDtoFromJSON(json: any): KafkaServiceAccountCredentialsDto {
    return KafkaServiceAccountCredentialsDtoFromJSONTyped(json, false);
}

export function KafkaServiceAccountCredentialsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): KafkaServiceAccountCredentialsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serviceAccountName': !exists(json, 'serviceAccountName') ? undefined : json['serviceAccountName'],
        'kafkaUserId': !exists(json, 'kafkaUserId') ? undefined : json['kafkaUserId'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'topics': !exists(json, 'topics') ? undefined : (json['topics'] === null ? null : (json['topics'] as Array<any>).map(TopicAccessDtoFromJSON)),
        'certificateExpiry': !exists(json, 'certificateExpiry') ? undefined : (json['certificateExpiry'] === null ? null : new Date(json['certificateExpiry'])),
        'password': !exists(json, 'password') ? undefined : json['password'],
        'certificate': !exists(json, 'certificate') ? undefined : json['certificate'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function KafkaServiceAccountCredentialsDtoToJSON(value?: KafkaServiceAccountCredentialsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serviceAccountName': value.serviceAccountName,
        'kafkaUserId': value.kafkaUserId,
        'createdBy': value.createdBy,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'description': value.description,
        'topics': value.topics === undefined ? undefined : (value.topics === null ? null : (value.topics as Array<any>).map(TopicAccessDtoToJSON)),
        'certificateExpiry': value.certificateExpiry === undefined ? undefined : (value.certificateExpiry === null ? null : value.certificateExpiry.toISOString()),
        'password': value.password,
        'certificate': value.certificate,
        'key': value.key,
    };
}

