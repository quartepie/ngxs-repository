import { RepositoryConfig } from './repository.store';

export class SetRepositoryList {
  static readonly type = '[Repository] Set repository list';
  constructor(public repositoryList: RepositoryConfig[]) {}
}
