import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card } from './../lib';

import * as ToPaysSelectors from './../../selectors/toPays';

import ToPay from './../ToPay';

const ToPays = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const renderItem = ({ item }) => (
        <ToPay id={item.id}/>
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

ToPays.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    }))
};

ToPays.defaultProps = {
    data: []
};

const mapStateToProps = (state) => ({
    data: ToPaysSelectors.getIds(state)
        .map((id) => ({ id }))
});

export default connect(mapStateToProps)(ToPays);
