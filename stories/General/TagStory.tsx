import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Tag from '../../src/General/Tag';
import { CloseIcon } from '../../src/General/Icon/components';

const props = {
  Tag: [
    {
      name: 'theme',
      type: 'string',
      defaultValue: <code>grey</code>,
      possibleValue: <code>red | blue | orange | green | black</code>,
      require: 'no',
      description: 'Sets theme of Badge.',
    },
    {
      name: 'block',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Badge into block style.',
    },
    {
      name: 'outline',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Badge into outline style.',
    },
  ],
};

const TagStory = () => (
  <StorybookComponent
    title="Tag"
    code="import { Tag } from 'glints-aries'"
    propsObject={props}
    usage={`<Tag theme="blue">
  Software Engineer
  <CloseIcon color="white" />
</Tag>`}
  >
    <div style={{ display: 'flex' }}>
      <div style={{ textAlign: 'center', marginRight: '2em' }}>
        <h3>Block</h3>
        <Tag theme="orange" block>
          <span style={{ marginRight: '12px' }}>Software Engineer</span>
          <CloseIcon color="white" />
        </Tag>
      </div>
      <div style={{ textAlign: 'center', marginRight: '2em' }}>
        <h3>Default</h3>
        <Tag theme="grey">
          <span style={{ marginRight: '12px', color: 'black' }}>
            Software Engineer
          </span>
          <CloseIcon color="black" />
        </Tag>
      </div>
      <div style={{ textAlign: 'center', marginRight: '2em' }}>
        <h3>Outline</h3>
        <Tag theme="green" outline>
          <span style={{ marginRight: '12px' }}>Software Engineer</span>
          <CloseIcon color="#93bd49" />
        </Tag>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h3>Default without Icon</h3>
        <Tag theme="grey">
          <span style={{ color: 'black' }}>Software Engineer</span>
        </Tag>
      </div>
    </div>
  </StorybookComponent>
);

export default TagStory;
