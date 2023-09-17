/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AppModelsRequestDatasource: core.serialization.ObjectSchema<
    serializers.AppModelsRequestDatasource.Raw,
    SuperAgent.AppModelsRequestDatasource
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
    type: core.serialization.string(),
    url: core.serialization.string().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace AppModelsRequestDatasource {
    interface Raw {
        name: string;
        description: string;
        type: string;
        url?: string | null;
        metadata?: Record<string, unknown> | null;
    }
}