import React from 'react';

import NewDropdown from '../../src/Navigation/NewDropdown';
import Collapsible from '../../src/Display/Collapsible';

const NewDropdownStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        NewDropdown
      </h1>
      <p>
        <code>
          {'import { NewDropdown } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <NewDropdown label="Career">
        <NewDropdown.Item value="Business Development">Business Development</NewDropdown.Item>
        <NewDropdown.Item value="Software Engineer">Software Engineer</NewDropdown.Item>
      </NewDropdown>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`handleChange = (value) => {
  console.log('selected value: ', value);
}

<NewDropdown label="Career" onChange={this.handleChange}>
  <NewDropdown.Item value="Business Development">
    Business Development
  </NewDropdown.Item>
  <NewDropdown.Item value="Software Engineer">
    Software Engineer
  </NewDropdown.Item>
</NewDropdown>`}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              <span style={{ fontWeight: '100' }}>Props for</span>
              {' '}
              NewDropdown
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            label
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Sets label of Dropdown.
          </td>
        </tr>
        <tr>
          <td>
            onChange
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            function
          </td>
          <td>
            no
          </td>
          <td>{'To get value of Dropdown\'s item.'}</td>
        </tr>
        <tr>
          <td>
            disabled
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>Disabling Dropdown.</td>
        </tr>
      </tbody>
    </table>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              <span style={{ fontWeight: '100' }}>Props for</span>
              {' '}
              NewDropdown.Item
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            value
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>{'Sets Dropdown\'s item value'}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default NewDropdownStory;
