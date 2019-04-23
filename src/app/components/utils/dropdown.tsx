/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, useState } from 'react';

const DROPDOWN_LIST = [
  'name',
  'stars',
  'release',
  'owner',
];

export const Dropdown: SFC = () => {
  const [activeSort, setSort] = useState(
    DROPDOWN_LIST[0]
  );

  const onClick = (selected: string) =>
    setSort(selected);

  return (
    <div>
      <a
        className="dropdown-trigger btn pink waves-effect waves-light"
        data-target="sort-dropdown">
        {activeSort}
        <i className="material-icons right">
          sort
        </i>
      </a>
      <ul
        id="sort-dropdown"
        className="dropdown-content"
        css={{ borderRadius: 2 }}>
        {DROPDOWN_LIST.map((item, i) => (
          <DropdownItem
            key={i}
            index={i}
            item={item}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
};

export const DropdownItem: SFC<{
  index: number;
  item: string;
  onClick(selected: string): void;
}> = (props) => (
  <div>
    <li
      className="valign-wrapper"
      css={{
        height: 50,
        padding: '0px 15px',
        textTransform: 'capitalize',
      }}
      tabIndex={props.index}
      onClick={(e) => props.onClick(props.item)}>
      {props.item}
    </li>
    <li className="divider" tabIndex={-1} />
  </div>
);
