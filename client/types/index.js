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
  +list: Array<{
    +dt_txt: string,
    +main: {
      +temp: number,
      +humidity: number,
      +pressure: number,
    },
    +weather: Array<{
      +icon: string,
      +description: string,
    }>,
  }>,
};

export type State = {
  +forecast: Forecast,
};
