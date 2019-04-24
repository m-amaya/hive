import { types } from 'mobx-state-tree';
import { Repo } from './models/Repo';

const RepoStore = types.model('RepoStore', {
  pending: types.boolean,
  list: types.array(Repo),
});

export const Store = types.model('Store', {
  repo: types.map(RepoStore),
});
