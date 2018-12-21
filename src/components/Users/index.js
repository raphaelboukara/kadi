import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card } from './../lib';

import User from './../User';

import * as UsersSelectors from './../../selectors/users';

const Users = ({ ids }) => (
    <Card>
        {
            ids.map((id) =>
                <User key={id} id={id}/>
            )
        }
    </Card>
);

Users.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.string)
};

Users.defaultProps = {
    ids: []
};

const mapStateToProps = (state) => ({
    ids: UsersSelectors.getIds(state)
});

export default connect(mapStateToProps)(Users);
