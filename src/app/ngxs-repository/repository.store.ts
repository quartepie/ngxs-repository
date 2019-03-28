import { Action, NgxsOnInit, State, StateContext, Store } from '@ngxs/store';
import { SetRepositoryList } from './repository.actions';
import { RepositoryListService } from './repository-list.service';
export const testRepositoryList: RepositoryConfig[] = [{
  name: 'external-companies',
  url: {
    create: '/external-companies',
    read: '/external-companies',
    update: '/external-companies/:id',
    delete: '/external-companies/:id'
  }
}];

export interface Repository<T> {
  list: Array<T>;
  page: number;
}

export interface RepositoryStoreModel {
  [key: string]: Repository<any>;
}

export interface RepositoryCRUDUrls {
  create: string;
  read: string;
  update: string;
  delete: string;
}

export interface RepositoryConfig {
  name: string;
  url: string | RepositoryCRUDUrls;
}



@State({
  name: 'repositories',
  defaults: {}
})
export class RepositoryStore implements NgxsOnInit {

  constructor(private service: RepositoryListService, private store: Store) {
    // setTimeout(() => this.store.dispatch(new SetRepositoryList(testRepositoryList)));
  }

  ngxsOnInit(ctx?: StateContext<any>): void | any {
    ctx.dispatch(new SetRepositoryList(testRepositoryList));
  }

  @Action(SetRepositoryList)
  setRepositoryList(ctx: StateContext<RepositoryStoreModel>, { repositoryList }: SetRepositoryList) {
    let list = {};
    repositoryList.forEach(repo => {
      list = {
        ...list,
        [repo.name]: {
          list: [],
          page: 1
        }
      };
    });
    console.log(list);
    ctx.setState({
      ...list
    });
  }


}
