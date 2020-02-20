import React from 'react';
import IPCheck from '../../components/ip-check';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ipCheckSelector } from './selector';

const dispatchProps = {};

const mapStateToProps = createSelector(ipCheckSelector, ipCheck => ipCheck);

export default connect(mapStateToProps, dispatchProps)(IPCheck);
