import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Selectors from './../../selectors';
import ToBuy from './../ToBuy';
import ToBuySeparator from './../ToBuySeparator';

const ToBuys = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const renderItem = ({ item }) => (
        <ToBuy id={item.id}/>
    );

    const keyExtractor = ({ id }) => id;

    return (
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={ToBuySeparator}/>
    );
};

ToBuys.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    }))
};

ToBuys.defaultProps = {
    data: []
};

const mapStateToProps = (state) => ({
    data: Selectors.toBuyIds(state)
        .map((id) => ({ id }))
});

export default connect(mapStateToProps)(ToBuys);
