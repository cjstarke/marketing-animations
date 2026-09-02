#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { RedirectDomainStack } from '../lib/redirect-stack'

const mainProfile = {
  account: '420280777025',
  region: 'us-east-1', // Must be us-east-1 for ACM certificate
}

const app = new cdk.App()

new RedirectDomainStack(app, 'ConvergeDirectRedirectStack', {
  env: mainProfile,
})
