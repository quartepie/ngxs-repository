import { Injectable, Optional } from '@angular/core';
import { RepositoryConfig } from './repository.store';
import { Store } from '@ngxs/store';
import { SetRepositoryList } from './repository.actions';

export class RepositoryListServiceConfig {
  list = [];
}

@Injectable()
export class RepositoryListService {

  constructor(private config: RepositoryListServiceConfig, private store: Store) {
    if (this.config.list) {
      // setTimeout(() => this.setRepositories(this.config.list));
    }
  }

  setRepositories(repositoryList: RepositoryConfig | RepositoryConfig[]) {
    if (Array.isArray(repositoryList)) {
      this.store.dispatch(new SetRepositoryList(repositoryList));
    } else {
      this.store.dispatch(new SetRepositoryList([repositoryList]));
    }
  }
}
