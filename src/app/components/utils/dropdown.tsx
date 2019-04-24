/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Dropdown as MDropdown } from 'materialize-css';
import { keys } from 'ramda';
import { SFC, useEffect, useState } from 'react';

interface IDropdownOptions {
  name: string;
  stars: string;
  release: string;
  owner: string;
}

const DROPDOWN_OPTIONS: IDropdownOptions = {
  name: 'text_format',
  stars: 'star',
  release: 'today',
  owner: 'face',
};

const DROPDOWN_LIST = keys(DROPDOWN_OPTIONS);

export const Dropdown: SFC = () => {
  const [activeSort, setSort] = useState(
    DROPDOWN_LIST[0]
  );

  const onClick = (
    selected: keyof IDropdownOptions
  ) => setSort(selected);

  useEffect(() => {
    MDropdown.init(
      document.querySelectorAll(
        '.dropdown-trigger'
      ),
      { constrainWidth: false }
    );
  });

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
  item: keyof IDropdownOptions;
  onClick(selected: keyof IDropdownOptions): void;
}> = (props) => (
  <div>
    <li
      className="valign-wrapper"
      css={{
        height: 50,
        padding: '0px 20px 0 10px',
        textTransform: 'capitalize',
      }}
      tabIndex={props.index}
      onClick={(e) => props.onClick(props.item)}>
      <i className="material-icons left">
        {DROPDOWN_OPTIONS[props.item]}
      </i>
      {props.item}
    </li>
    <li className="divider" tabIndex={-1} />
  </div>
);
