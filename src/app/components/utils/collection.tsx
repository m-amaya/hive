/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';
import {
  Title,
  Text,
} from '../../styles/typography';

interface ICollectionProps {
  header: string;
  list: string[];
}

export const Collection: SFC<ICollectionProps> = (
  props
) => (
  <ul className="collection with-header">
    <li className="collection-header">
      <Title>{props.header}</Title>
    </li>
    {props.list.map((item, i) => (
      <CollectionItem key={i}>
        {item}
      </CollectionItem>
    ))}
  </ul>
);

export const CollectionItem: SFC = (props) => (
  <li
    className="collection-item"
    css={{
      padding: '0px !important',
    }}>
    <div className="switch">
      <label
        className="valign-wrapper"
        css={{ cursor: 'pointer', height: 50 }}>
        <input type="checkbox" />
        <span className="lever" />
        <Text>{props.children}</Text>
      </label>
    </div>
  </li>
);
