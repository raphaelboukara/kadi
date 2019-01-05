import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    Dimensions,
    PanResponder,
    View
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardSection } from './../lib';

import * as ToPaysSelectors from './../../selectors/toPays';
import * as ToPaysActions from './../../actions/toPays';

const { width } = Dimensions.get('window');

class ToPay extends Component {
    constructor(props) {
        super(props);

        this.gestureDelay = -35;

        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => false,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderTerminationRequest: () => false,
            onPanResponderMove: (_, { dx }) => {
                if (dx < 35) {
                    return;
                }

                position.setValue({
                    x: dx + this.gestureDelay,
                    y: 0
                });
            },
            onPanResponderRelease: (_, { dx }) => {
                if (dx < 175) {
                    Animated.timing(this.state.position, {
                        toValue: {x: 0, y: 0},
                        duration: 150,
                    }).start();
                } else {
                    Animated.timing(this.state.position, {
                        toValue: {x: width, y: 0},
                        duration: 300,
                    }).start(() => {
                        this.props.remove();
                    });
                }
            },
        });

        this.panResponder = panResponder;
        this.state = {
            position
        };
    }

    render() {
        return (
            <CardSection>
                <Animated.View style={this.state.position.getLayout()}
                    {...this.panResponder.panHandlers}>
                    <View style={styles.container}>
                        <Text style={styles.description(this.props.color)}>
                            {this.props.description}
                        </Text>
                        <Text style={styles.amount(this.props.color)}>
                            ₪ {this.props.amount}
                        </Text>
                    </View>
                </Animated.View>
            </CardSection>
        );
    }
}

ToPay.propTypes = {
    description: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    description: (color) => ({
        padding: 10,
        color
    }),
    amount: (color) => ({
        padding: 10,
        color
    }),
    absoluteCell: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 100,
        backgroundColor: 'red'
    }
});

const mapStateToProps = (state, { id }) => {
    const { description, amount, color } = ToPaysSelectors.findById(state, id);

    return { description, amount, color };
};

const mapDispatchToProps = (dispatch, { id }) => ({
    remove: () => dispatch(ToPaysActions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToPay);
