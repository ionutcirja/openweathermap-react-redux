// @flow
import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { State } from '../../../../types';
import * as Actions from '../../actions';
import {
  forecastGroupedListSelector,
  forecastLocationSelector,
} from '../../selectors';
import Forecast from '../../components/root';

type Props = {
  actions: {
    forecastRequest: Function,
  },
  list: {
    [key: string]: {
      day: string,
      hoursList: Array<{
        hour: string,
        weather: Array<{
          icon: string,
          description: string,
        }>,
        main: {
          temp: number,
          humidity: number,
          pressure: number,
        },
      }>,
    },
  },
  location: string,
};

export class Wrapper extends Component<Props> {
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
  location: forecastLocationSelector(state),
  list: forecastGroupedListSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);
