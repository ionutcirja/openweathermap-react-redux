// @flow
import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { State } from '../../../../types';
import * as Actions from '../../actions';
import { forecastGroupedListSelector } from '../../selectors';
import Forecast from '../../components/root';

type Props = {
  actions: {
    forecastRequest: Function,
  },
  list: {
    [key: string]: any,
  },
};

class Wrapper extends Component<Props> {
  componentDidMount() {
    const { actions } = this.props;
    actions.forecastRequest({ location: 'London' });
  }

  render() {
    const { actions, ...rest } = this.props;
    return (
      <Forecast {...rest} />
    );
  }
}

const mapStateToProps = (state: State) => ({
  ...state.forecast,
  list: forecastGroupedListSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);
