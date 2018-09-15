/* @flow */

import React, { Component } from 'react';
import {
  DropdownContainer, DropdownLabelWrapper, DropdownLabel,
} from '../Style/DropdownStyle';
import {
  SecondaryColor,
} from '../Style/Colors';

import { Icon } from '../Icon';

class Dropdown extends Component <Props, State> {
  state = {
    isOpen: true,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      children,
      title,
      size,
      className,
      spaceBetween,
      noPadding,
      hoverColor,
      hoverBackGroundColor,
      iconColor,
      fontSize,
      fontWeight,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <DropdownContainer
        size={size}
        open={isOpen}
        onClick={this.handleOpen}
        onBlur={this.handleClickOutside}

        hoverColor={hoverColor}
        hoverBackGroundColor={hoverBackGroundColor}
        noPadding={noPadding}
      >
        <DropdownLabelWrapper
          className={className}
          spaceBetween={spaceBetween}
          noPadding={noPadding}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          <DropdownLabel>
            <span>
              {title}
            </span>
          </DropdownLabel>
          <Icon name="arrow-down" size="15" color={iconColor} />
        </DropdownLabelWrapper>
        <If condition={isOpen}>
          { children }
        </If>
      </DropdownContainer>
    );
  }
}

Dropdown.defaultProps = {
  hoverBackGroundColor: SecondaryColor.blue,
  hoverColor: SecondaryColor.white,
  iconColor: SecondaryColor.black,
};

type Props = {
  children: React$Node,
  title: string,
  size: string,
  className: string,
  noPadding: boolean,
  iconColor: string
};

type State = {
  isOpen: boolean,
};

export default Dropdown;
