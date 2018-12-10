import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './../../style.json';

class ToBuyInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position">
                <TextInput style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={() => this.state.text}
                    value={this.state.text}
                    autoCorrect={false}
                    autoFocus={true}
                    selectionColor={style.color.text}/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 25,
        fontSize: style.font.size.text,
        color: style.color.background,
        backgroundColor: style.color.text
    }
});

export default ToBuyInput;
