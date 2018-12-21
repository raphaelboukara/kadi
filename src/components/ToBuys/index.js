import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card } from './../lib';

import * as ToBuysSelectors from './../../selectors/toBuys';

import ToBuy from './../ToBuy';

const ToBuys = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const renderItem = ({ item }) => (
        <ToBuy id={item.id}/>
    );

    const keyExtractor = ({ id }) => id;

    return (
        <Card>
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ref={ ( ref ) => this.scrollView = ref }
                onContentSizeChange={() => this.scrollView.scrollToEnd()}/>
        </Card>
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
    data: ToBuysSelectors.getIds(state)
        .map((id) => ({ id }))
});

export default connect(mapStateToProps)(ToBuys);
