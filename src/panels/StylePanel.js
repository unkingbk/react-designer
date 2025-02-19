import React from 'react';
import _ from 'lodash';

import Panel from './Panel';

import styles from './styles';
import PropertyGroup from './PropertyGroup';
import Columns from './Columns';
import Column from './Column';
import ColorInput from './ColorInput';

export default class StylePanel extends Panel {
  modes = [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
  ];

  render() {
    let {object} = this.props;
    return (
      <PropertyGroup>
        <Columns label="Colour">
          <Column>
            <ColorInput value={object.fill}
                        onChange={this.props.onChange.bind(this, 'fill')} />
          </Column>
        </Columns>
        <Columns label="Stroke">
          <Column>
            <ColorInput value={object.stroke}
                        onChange={this.props.onChange.bind(this, 'stroke')} />
          </Column>
          <Column label="width">
            <input style={[[styles.input, styles.integerInput], {width: 30}]}
                   onChange={(e) => this.props.onChange('strokeWidth', e.target.value)}
                   value={object.strokeWidth} />
          </Column>
          <Column showIf={_.has(object, 'radius')} label="radius">
            <input style={[styles.input, styles.integerInput, {width: 30}]}
                   onChange={(e) => this.props.onChange('radius', e.target.value)}
                   value={object.radius} />
          </Column>
        </Columns>
      </PropertyGroup>
    );
  }
}
