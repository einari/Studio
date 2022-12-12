// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { useState } from 'react';
import { useEnvironments } from '../../api/environments/useEnvironments';
import { M3EnvironmentListDto } from '../../api/generated';
import { EnvironmentSelector, EnvironmentSelectorProps } from '../../components/environments/EnvironmentSelector';
import { Explorer } from '../../components/explorer/Explorer';
import { Layout } from '../../components/layout/Layout';
import { Page } from '../../components/layout/Page';

export default function ExplorerPage() {
    const [selectedEnvironment, setSelectedEnvironment] = useState<M3EnvironmentListDto>();
    const { data: environments } = useEnvironments();

    const environmentSelectorProps: EnvironmentSelectorProps = {
        environments: environments ?? [],
        selectedEnvironment: selectedEnvironment?.name || '',
        onEnvironmentSelected:(env) => setSelectedEnvironment(env)
    };

    return (
        <Layout
            sidebarSlot={
                <EnvironmentSelector {...environmentSelectorProps} />
            }
        >
            <Page>
                <h1>Explorer</h1>
                <Explorer selectedEnvironment={selectedEnvironment?.name ?? undefined} />

            </Page>
        </Layout>
    );
};

