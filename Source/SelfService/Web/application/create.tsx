// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import Typography from '@material-ui/core/Typography';
import { useSnackbar } from 'notistack';
import Checkbox from '@material-ui/core/Checkbox';


import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ButtonText } from '../theme/buttonText';
import { Button } from '../theme/button';
import { createApplication, HttpApplicationRequest } from '../api/application';
import { ShortInfo } from '../api/api';
import { Guid } from '@dolittle/rudiments';


type Props = {};


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
        inactiveText: {
            color: '#93959F',
        },
        progressBar: {
            color: '#ff9366',
        },

        textField: { //https://stackoverflow.com/a/60461876 excellent resource
            '& .MuiOutlinedInput-input': {
                color: 'white'
            },
            '& .MuiInputLabel-root': {
                color: 'white'
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                color: 'white',
                borderColor: 'white'
            },
            '&:hover .MuiOutlinedInput-input': {
                color: 'white'
            },
        },
        stepIcon: {
            'color': '#3B3D48',
            '&.MuiStepIcon-active': {
                color: '#6678F6'
            },
            '&.MuiStepIcon-completed': {
                color: '#6678F6'
            },
            '&.MuiStepIcon-active .MuiStepIcon-text': {
                fill: '#B3BBFB'
            },
            '&.MuiStepIcon-root .MuiStepIcon-text': {
                fill: '#93959F'
            }
        }
    })
);



export const Create: React.FunctionComponent<Props> = (props) => {
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const newApplicationId = Guid.create().toString();
    const steps = [
        'Provide a name',
        'Provide contact info',
        'Setup Environments'
    ];


    const [activeStep, setActiveStep] = React.useState(0);
    const [application, setApplication] = React.useState({
        id: newApplicationId,
        name: '',
    } as ShortInfo);
    const [contactName, setContactName] = React.useState('');
    const [contactEmail, setContactEmail] = React.useState('');
    const [environments, setEnvironments] = React.useState([
        {
            name: 'Production',
            shortName: 'Prod',
            checked: true,
        },
        {
            name: 'Development',
            shortName: 'Dev',
            checked: true,
        },
        {
            name: 'Test',
            shortName: 'Test',
            checked: true,
        },
    ]);

    const [activeNextButton, setActiveNextButton] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newEnvironments = [...environments];
        newEnvironments[index].checked = event.target.checked;
        setEnvironments(newEnvironments);
    };

    const stepsContent = [
        <>
            <Typography component={'span'}>
                <p>
                    Let’s name your application
                </p>
            </Typography>
            <Grid
                container
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
            >
                <TextField
                    required
                    id='applicationId'
                    label='Application ID'
                    variant='outlined'
                    className={classes.textField}
                    value={application.id}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const _application = { ...application };
                        _application.id = event.target.value!;
                        setApplication(_application);
                        setActiveNextButton(true);
                    }}
                />

                <TextField
                    required
                    id='applicationName'
                    label='Name'
                    variant='outlined'
                    className={classes.textField}
                    value={application.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const _application = { ...application };
                        _application.name = event.target.value!;
                        setApplication(_application);
                        setActiveNextButton(true);
                    }}
                />
            </Grid>
        </>,
        <>
            <Typography component={'span'}>
                <p>
                    Who should we contact regarding important updates for your application?
                </p>
                <TextField
                    required
                    id='contactName'
                    label='Contact Name'
                    variant='outlined'
                    className={classes.textField}
                    value={contactName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const _name = event.target.value!;
                        setContactName(_name);
                        setActiveNextButton(true);
                    }}
                />

                <TextField
                    required
                    id='contactEmail'
                    label='Email'
                    variant='outlined'
                    className={classes.textField}
                    value={contactEmail}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const _name = event.target.value!;
                        setContactEmail(_name);
                        enqueueSnackbar('TODO');
                        setActiveNextButton(true);
                    }}
                />

            </Typography>
        </>,
        <>
            <Typography component={'span'}>
                <p>
                    Select at least (1) environment for your application or create a custom named one.*
                </p>

                <FormGroup>
                    {environments.map((environment, index) => (
                        <FormControlLabel key={environment.shortName}
                            control={
                                <Checkbox
                                    checked={environment.checked}
                                    onChange={(event) => handleChange(event, index)}
                                    name={environment.shortName}
                                />
                            }
                            label={environment.name}
                        />
                    ))}
                </FormGroup>
            </Typography >
        </>,
    ];


    const handleNext = async (event: React.MouseEvent<HTMLElement>) => {
        if (activeStep === 2) {
            const input: HttpApplicationRequest = {
                id: application.id,
                name: application.name,
                environments: environments.filter(e => e.checked).map(e => e.shortName),
            };
            try {
                await createApplication(input);
                // redirect to build
                const href = `/application/building/${application.id}`;
                history.push(href);

                enqueueSnackbar('Application created', { variant: 'info' });
            } catch (error) {
                enqueueSnackbar('Error creating application', { variant: 'error' });
            }
            return;
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = (event: React.MouseEvent<HTMLElement>) => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <h1>Create Application Screen</h1>
            <div className={classes.root}>

                <Stepper activeStep={activeStep} orientation='vertical'>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel StepIconProps={{
                                classes: { root: classes.stepIcon }
                            }}>
                                <span className={activeStep >= index ? '' : classes.inactiveText}>{label}</span>
                            </StepLabel>
                            <StepContent>
                                {stepsContent[index]}

                                <div className={classes.actionsContainer}>
                                    <div>
                                        <ButtonText
                                            onClick={handleBack}
                                            disabled={activeStep === 0}
                                            buttonType='secondary'
                                        >
                                            Back
                                        </ButtonText>

                                        <Button
                                            onClick={handleNext}
                                            disabled={!activeNextButton}
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Click to create'
                                                : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </>
    );
};