#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ApiCrudWorkshopStack } from '../lib/api-crud-workshop-stack';

const app = new cdk.App();
new ApiCrudWorkshopStack(app, 'ApiCrudWorkshopStack');
