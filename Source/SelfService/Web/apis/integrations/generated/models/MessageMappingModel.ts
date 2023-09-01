/* tslint:disable */
/* eslint-disable */
/**
 * Aigonix.Bridge.M3
 * Bridge API - made for Aigonix Studio
 *
 * The version of the OpenAPI document: 0.0.1.333
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MappableTable } from './MappableTable';
import {
    MappableTableFromJSON,
    MappableTableFromJSONTyped,
    MappableTableToJSON,
} from './MappableTable';
import type { MappedField } from './MappedField';
import {
    MappedFieldFromJSON,
    MappedFieldFromJSONTyped,
    MappedFieldToJSON,
} from './MappedField';

/**
 * Represents a message mapping that describes the table to convert from and
 * how to map a change into a message
 * @export
 * @interface MessageMappingModel
 */
export interface MessageMappingModel {
    /**
     * The id of the message mapping within the context of the connection
     * @type {string}
     * @memberof MessageMappingModel
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof MessageMappingModel
     */
    createdAt: Date;
    /**
     * The name of the message-type this mapping describes
     * @type {string}
     * @memberof MessageMappingModel
     */
    name: string;
    /**
     * The connection this message mapping belongs to
     * @type {string}
     * @memberof MessageMappingModel
     */
    connection: string;
    /**
     * Optional description of the message mapping
     * @type {string}
     * @memberof MessageMappingModel
     */
    description?: string;
    /**
     * 
     * @type {MappableTable}
     * @memberof MessageMappingModel
     */
    fromTable: MappableTable;
    /**
     * The fields that are mapped from the table in this mapping.
     * @type {Array<MappedField>}
     * @memberof MessageMappingModel
     */
    fieldMappings: Array<MappedField>;
    /**
     * The last time (if any) the message mapping was deployed. May be null if
     * it has never been deployed
     * @type {Date}
     * @memberof MessageMappingModel
     */
    deployedAt?: Date | null;
    /**
     * The last deployed version, if any. May be null if it has never been
     * deployed
     * @type {number}
     * @memberof MessageMappingModel
     */
    deployedVersion?: number | null;
    /**
     * The last deployed version that has been confirmed by the remote service.
     * May be null if it has never been confirmed or if it has been deployed.
     * @type {number}
     * @memberof MessageMappingModel
     */
    confirmedDeployedVersion?: number | null;
    /**
     * The jq predicate that is used to filter which messages are sent from the connection
     * @type {string}
     * @memberof MessageMappingModel
     */
    jqPredicate?: string | null;
}

/**
 * Check if a given object implements the MessageMappingModel interface.
 */
export function instanceOfMessageMappingModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "connection" in value;
    isInstance = isInstance && "fromTable" in value;
    isInstance = isInstance && "fieldMappings" in value;

    return isInstance;
}

export function MessageMappingModelFromJSON(json: any): MessageMappingModel {
    return MessageMappingModelFromJSONTyped(json, false);
}

export function MessageMappingModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageMappingModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'name': json['name'],
        'connection': json['connection'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'fromTable': MappableTableFromJSON(json['fromTable']),
        'fieldMappings': ((json['fieldMappings'] as Array<any>).map(MappedFieldFromJSON)),
        'deployedAt': !exists(json, 'deployedAt') ? undefined : (json['deployedAt'] === null ? null : new Date(json['deployedAt'])),
        'deployedVersion': !exists(json, 'deployedVersion') ? undefined : json['deployedVersion'],
        'confirmedDeployedVersion': !exists(json, 'confirmedDeployedVersion') ? undefined : json['confirmedDeployedVersion'],
        'jqPredicate': !exists(json, 'jqPredicate') ? undefined : json['jqPredicate'],
    };
}

export function MessageMappingModelToJSON(value?: MessageMappingModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': (value.createdAt.toISOString()),
        'name': value.name,
        'connection': value.connection,
        'description': value.description,
        'fromTable': MappableTableToJSON(value.fromTable),
        'fieldMappings': ((value.fieldMappings as Array<any>).map(MappedFieldToJSON)),
        'deployedAt': value.deployedAt === undefined ? undefined : (value.deployedAt === null ? null : value.deployedAt.toISOString()),
        'deployedVersion': value.deployedVersion,
        'confirmedDeployedVersion': value.confirmedDeployedVersion,
        'jqPredicate': value.jqPredicate,
    };
}

