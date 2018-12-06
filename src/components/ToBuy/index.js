import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Selectors from './../../selectors';
import style from './../../style.json';

const ToBuy = ({ text }) => (
    <Text style={styles.text}>
        {text}
    </Text>
);

ToBuy.propTypes = {
    text: PropTypes.string.isRequired
};

ToBuy.defaultProps = {
    text: ''
};

const mapStateToProps = (state, { id }) => ({
    text: Selectors.toBuyById(state, id).text
});

const styles = StyleSheet.create({
    text: {
        padding: 25,
        fontSize: style.font.size.text,
        color: style.color.text
    }
});

export default connect(mapStateToProps)(ToBuy);
