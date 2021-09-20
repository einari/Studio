// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';

import { HttpResponseApplications2, ShortInfo } from '../api/api';


import { BackupLink, getLink, BackupsForApplication, getBackupsByApplication, BackupLinkShareInput } from '../api/backups';
import { useGlobalContext } from '../stores/notifications';

type BackupsDetailsList = {
    environment: string;
    application: ShortInfo;
    file: string;
    when: string;
};

type Props = {
    application: HttpResponseApplications2
    environment: string
};


export const ListView: React.FunctionComponent<Props> = (props) => {
    const _props = props!;
    const application = _props.application;
    const environment = _props.environment;
    const { setNotification } = useGlobalContext();

    const [data, setData] = useState({} as BackupsForApplication);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        Promise.all([
            getBackupsByApplication(application.id, environment)
        ]).then(values => {
            const _data = values[0];
            // TODO this should be unique
            // TODO also when we have more than one application and more than one environment we should default to something.
            setData(_data);
            setLoaded(true);
        });
    }, []);

    if (!loaded) {
        return null;
    }



    const backups: BackupsDetailsList[] = data.files.map<BackupsDetailsList>(file => {
        const parts = file.split('/');
        const when: string = parts[parts.length - 1].replace('.gz.mongodump', '');

        return {
            application: data.application,
            environment,
            file,
            when,
        };
    });


    return (
        <Box component={Paper} m={2}>
            <TableContainer>
                <Table size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="right">Application</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Download</TableCell>
                            <TableCell align="right">Clipboard</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {backups.map((item) => (
                            <TableRow key={item.file}>
                                <TableCell align="left">
                                    {item.file}
                                </TableCell>
                                <TableCell align="right">{application.name}</TableCell>
                                <TableCell align="right">{item.when}</TableCell>

                                <TableCell align="right"><GetAppIcon onClick={async () => {
                                    const input: BackupLinkShareInput = {
                                        applicationId: application.id,
                                        environment: item.environment,
                                        file_path: item.file,
                                    };

                                    const share: BackupLink = await getLink(input);
                                    window.open(share.url, '_blank');
                                }} /></TableCell>

                                <TableCell align="right"><ShareIcon onClick={async () => {
                                    const input: BackupLinkShareInput = {
                                        applicationId: application.id,
                                        environment: item.environment,
                                        file_path: item.file,
                                    };

                                    const share: BackupLink = await getLink(input);
                                    await navigator.clipboard.writeText(share.url);
                                    setNotification('The download link is now in your clipboard', 'info');
                                }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};