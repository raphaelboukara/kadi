import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    Dimensions,
    PanResponder
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardSection } from './../lib';

import * as ToBuysSelectors from './../../selectors/toBuys';
import * as ToBuysActions from './../../actions/toBuys';

const { width } = Dimensions.get('window');

class ToBuy extends Component {
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
                    <Text style={styles.text(this.props.color)}>
                        {this.props.description}
                    </Text>
                </Animated.View>
            </CardSection>
        );
    }
}

ToBuy.propTypes = {
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
};

ToBuy.defaultProps = {
    description: ''
};

const styles = StyleSheet.create({
    text: (color) => ({
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
    const { description, color } = ToBuysSelectors.findById(state, id);

    return { description, color };
};

const mapDispatchToProps = (dispatch, { id }) => ({
    remove: () => dispatch(ToBuysActions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToBuy);
