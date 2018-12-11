import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { actions } from '../redux/userLogin';
import Login from "routes/login";
import {testMoreProperty} from "../selectors/test.selector"

Login.propTypes = {
    loggingIn: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        loggingIn: state.userLogin.loggingIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            login: actions.userLogin,
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);