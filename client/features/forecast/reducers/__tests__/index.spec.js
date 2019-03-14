import deepFreeze from 'deep-freeze';
import reducer from '..';

describe('Forecast reducers', () => {
  it('should return the default state if the action type is not defined', () => {
    const initialState = { someProp: 'some value' };
    deepFreeze(initialState);
    expect(reducer(initialState, { type: 'UNDEFINED_ACTION' })).toEqual(initialState);
  });

  it('should return a new state containing a true loading prop and a false error prop'
    + ' if the action type is FORECAST_REQUEST', () => {
    const initialState = {
      someProp: 'some value',
    };
    deepFreeze(initialState);
    expect(reducer(initialState, { type: 'FORECAST_REQUEST' })).toEqual({
      loading: true,
      error: false,
    });
  });

  it('should return a new state containing a false loading prop and the payload content'
    + ' if the action type is FORECAST_RESPONSE', () => {
    const initialState = {
      error: true,
    };
    const payload = { list: ['1', '2', '3'] };
    deepFreeze(initialState);
    expect(reducer(initialState, { type: 'FORECAST_RESPONSE', payload })).toEqual({
      loading: false,
      ...payload,
    });
  });

  it('should return a new state containing a false loading prop and a true error prop'
    + ' if the action type is FORECAST_ERROR', () => {
    const initialState = {
      someProp: 'some value',
    };
    deepFreeze(initialState);
    expect(reducer(initialState, { type: 'FORECAST_ERROR' })).toEqual({
      loading: false,
      error: true,
    });
  });
});
