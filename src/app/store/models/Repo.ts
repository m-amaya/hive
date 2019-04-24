import { types } from 'mobx-state-tree';

const Owner = types.model('Owner', {
  name: types.string,
  url: types.string,
  avatarUrl: types.string,
  type: types.enumeration(['ORG', 'USR']),
});

const License = types.model('License', {
  name: types.string,
  url: types.string,
});

const Links = types.model('Links', {
  html: types.string,
  git: types.string,
  home: types.string,
  guide: types.string,
  ref: types.string,
});

export const Repo = types.model('Repo', {
  name: types.string,
  description: types.string,
  language: types.string,
  owner: types.map(Owner),
  license: types.map(License),
  links: types.map(Links),
  topics: types.array(
    types.enumeration(['API', 'BCK', 'CHR'])
  ),
  size: types.number,
  stars: types.number,
  watchers: types.number,
  createdAt: types.Date,
  updatedAt: types.Date,
  pushedAt: types.Date,
});
