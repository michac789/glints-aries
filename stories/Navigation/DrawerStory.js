import React, { Component } from 'react';

import StorybookComponent from '../StorybookComponent';

import Drawer from '../../src/Navigation/Drawer';
import Button from '../../src/General/Button';

class DrawerStory extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  renderSideBar = () => {
    const { isOpen } = this.state;
    return (
      <div>
        <Button
          theme="blue"
          hoverColor="red"
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          CLOSE
        </Button>
      </div>
    );
  }

  render() {
    const { isOpen } = this.state;
    const props = {
      Drawer: [
        {
          name: 'isOpen',
          type: 'boolean',
          defaultValue: <code>false</code>,
          possibleValue: <code>true | false</code>,
          require: 'yes',
          description: '',
        },
        {
          name: 'onClose',
          type: 'function',
          defaultValue: '',
          possibleValue: 'function',
          require: 'yes',
          description: 'A function to close Drawer.',
        },
      ],
    };

    return (
      <StorybookComponent
        title="Drawer"
        code="import { Drawer } from 'glints-aries'"
        propsObject={props}
        usage={`<Drawer
  isOpen={isOpen}
  onClose={() => this.setState({ isOpen: false })}
>
  <Component />
</Drawer>`}
      >
        <Button
          theme="blue"
          hoverColor="red"
          onClick={() => this.setState({ isOpen: true })}
        >
          OPEN
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          {this.renderSideBar()}
        </Drawer>
      </StorybookComponent>
    );
  }
}

export default DrawerStory;
