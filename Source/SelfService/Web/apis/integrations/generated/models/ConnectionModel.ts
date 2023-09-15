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
import type { ConnectionConfiguration } from './ConnectionConfiguration';
import {
    ConnectionConfigurationFromJSON,
    ConnectionConfigurationFromJSONTyped,
    ConnectionConfigurationToJSON,
} from './ConnectionConfiguration';
import type { ConnectionStatus } from './ConnectionStatus';
import {
    ConnectionStatusFromJSON,
    ConnectionStatusFromJSONTyped,
    ConnectionStatusToJSON,
} from './ConnectionStatus';
import type { EnvironmentType } from './EnvironmentType';
import {
    EnvironmentTypeFromJSON,
    EnvironmentTypeFromJSONTyped,
    EnvironmentTypeToJSON,
} from './EnvironmentType';
import type { RemoteServiceStatus } from './RemoteServiceStatus';
import {
    RemoteServiceStatusFromJSON,
    RemoteServiceStatusFromJSONTyped,
    RemoteServiceStatusToJSON,
} from './RemoteServiceStatus';

/**
 * 
 * @export
 * @interface ConnectionModel
 */
export interface ConnectionModel {
    /**
     * 
     * @type {string}
     * @memberof ConnectionModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionModel
     */
    connectionId: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionModel
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionModel
     */
    cronExportTrigger?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectionModel
     */
    strictCertificateValidation?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectionModel
     */
    readModelsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectionModel
     */
    webhooksEnabled?: boolean;
    /**
     * 
     * @type {EnvironmentType}
     * @memberof ConnectionModel
     */
    chosenEnvironment: EnvironmentType;
    /**
     * 
     * @type {ConnectionConfiguration}
     * @memberof ConnectionModel
     */
    _configuration: ConnectionConfiguration;
    /**
     * 
     * @type {ConnectionStatus}
     * @memberof ConnectionModel
     */
    status: ConnectionStatus;
    /**
     * 
     * @type {RemoteServiceStatus}
     * @memberof ConnectionModel
     */
    mdpStatus: RemoteServiceStatus;
    /**
     * 
     * @type {RemoteServiceStatus}
     * @memberof ConnectionModel
     */
    ionStatus: RemoteServiceStatus;
}

/**
 * Check if a given object implements the ConnectionModel interface.
 */
export function instanceOfConnectionModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "connectionId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "chosenEnvironment" in value;
    isInstance = isInstance && "_configuration" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "mdpStatus" in value;
    isInstance = isInstance && "ionStatus" in value;

    return isInstance;
}

export function ConnectionModelFromJSON(json: any): ConnectionModel {
    return ConnectionModelFromJSONTyped(json, false);
}

export function ConnectionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'connectionId': json['connectionId'],
        'name': json['name'],
        'description': json['description'],
        'cronExportTrigger': !exists(json, 'cronExportTrigger') ? undefined : json['cronExportTrigger'],
        'strictCertificateValidation': !exists(json, 'strictCertificateValidation') ? undefined : json['strictCertificateValidation'],
        'readModelsEnabled': !exists(json, 'readModelsEnabled') ? undefined : json['readModelsEnabled'],
        'webhooksEnabled': !exists(json, 'webhooksEnabled') ? undefined : json['webhooksEnabled'],
        'chosenEnvironment': EnvironmentTypeFromJSON(json['chosenEnvironment']),
        '_configuration': ConnectionConfigurationFromJSON(json['configuration']),
        'status': ConnectionStatusFromJSON(json['status']),
        'mdpStatus': RemoteServiceStatusFromJSON(json['mdpStatus']),
        'ionStatus': RemoteServiceStatusFromJSON(json['ionStatus']),
    };
}

export function ConnectionModelToJSON(value?: ConnectionModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'connectionId': value.connectionId,
        'name': value.name,
        'description': value.description,
        'cronExportTrigger': value.cronExportTrigger,
        'strictCertificateValidation': value.strictCertificateValidation,
        'readModelsEnabled': value.readModelsEnabled,
        'webhooksEnabled': value.webhooksEnabled,
        'chosenEnvironment': EnvironmentTypeToJSON(value.chosenEnvironment),
        'configuration': ConnectionConfigurationToJSON(value._configuration),
        'status': ConnectionStatusToJSON(value.status),
        'mdpStatus': RemoteServiceStatusToJSON(value.mdpStatus),
        'ionStatus': RemoteServiceStatusToJSON(value.ionStatus),
    };
}

