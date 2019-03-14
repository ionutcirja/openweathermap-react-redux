// @flow

export type Action = {
  +type: string,
  +meta?: {
    [key: string]: any,
  },
  +payload: {
    [key: string]: any,
  },
};

export type Forecast = {
  list: {
    [key: string]: any,
  },
};

export type State = {
  +forecast: Forecast,
};
