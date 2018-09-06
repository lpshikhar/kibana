/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */




import { connect } from 'react-redux';
import { PolicySelection as PresentationComponent } from './policy_selection';
import {
  getPolicies, getIsSelectedPolicySet, getSelectedPolicyName,
} from '../../../../store/selectors';
import {
  fetchPolicies,
  setSelectedPolicy,
} from '../../../../store/actions';

export const PolicySelection = connect(
  state => ({
    isSelectedPolicySet: getIsSelectedPolicySet(state),
    policies: getPolicies(state),
    selectedPolicyName: getSelectedPolicyName(state),
  }),
  {
    fetchPolicies,
    setSelectedPolicy,
  }
)(PresentationComponent);