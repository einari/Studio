// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { WorkSpaceLayoutWithSidePanel } from '../components/layout/workSpaceLayout';
import { Welcome } from './Welcome';
import { CreateCustomer } from './customer/CreateCustomer';
import { AllCustomersView } from './customer/AllCustomersView';
import { CustomerView } from './customer/CustomerView';
import { ApplicationAccessView } from './application/ApplicationAccessView';

export const AdminIndex = () =>
    <WorkSpaceLayoutWithSidePanel pageTitle='Administrator' sidePanelMode='applications'>
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/customers' element={<AllCustomersView />} />
            <Route path='/customer/create' element={<CreateCustomer />} />
            <Route path='/customer/:customerId' element={<CustomerView />} />
            <Route path='/customer/:customerId/application/:applicationId/user/access' element={<ApplicationAccessView />} />
        </Routes>
    </WorkSpaceLayoutWithSidePanel>;