import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '..';

describe('Forecast component', () => {
  let propsToRender;
  beforeEach(() => {
    propsToRender = {
      list: {},
      theme: {
        colours: {
          greyDarker: 'grey-darker',
        },
      },
    };
  });

  describe('render', () => {
    it('should render the location if location prop value is truthy', () => {
      propsToRender.location = 'London';
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a list of days forecast if list is list prop is not empty', () => {
      propsToRender.list = {
        '2017-02-14': [
          {
            day: '2017-02-14',
            hour: '18:00:00',
            dt_txt: '2017-02-14 18:00:00',
          },
          {
            day: '2017-02-14',
            hour: '21:00:00',
            dt_txt: '2017-02-14 21:00:00',
          },
        ],
        '2017-02-15': [
          {
            day: '2017-02-15',
            hour: '18:00:00',
            dt_txt: '2017-02-15 18:00:00',
          },
        ],
      };
      const wrapper = shallow(<Component {...propsToRender} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
