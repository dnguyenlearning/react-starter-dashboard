import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import App from "../app/index";

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.userLogin.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({

        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);