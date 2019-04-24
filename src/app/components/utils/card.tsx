/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  Tag,
} from '../../styles/typography';

export const Card: SFC = () => (
  <Link
    to="/repo?name=abc"
    css={{ color: '#000' }}>
    <div
      className="col s12 l6"
      css={{ cursor: 'pointer' }}>
      <div className="card hoverable">
        <div className="card-content">
          <StarRating />
          <Title>Repo Name</Title>
          <p>
            A short description of the GitHub
            repo. Should not be more than a few
            sentences long.
          </p>
          <div css={{ marginTop: 15 }}>
            <Tag>API</Tag>
            <Tag>UI</Tag>
            <Tag>Framework</Tag>
            <Tag>CSS</Tag>
          </div>
        </div>
        <div
          className="card-action valign-wrapper grey-text text-darken-2"
          css={{
            justifyContent: 'space-between',
          }}>
          <div>mamaya</div>
          <div>v1.0.0</div>
        </div>
      </div>
    </div>
  </Link>
);

const StarRating: SFC = () => (
  <div
    className="valign-wrapper"
    css={{
      position: 'absolute',
      top: 12,
      right: 15,
    }}>
    <i
      className="material-icons"
      css={{ fontSize: 16, marginRight: 5 }}>
      star
    </i>
    26.2K
  </div>
);
