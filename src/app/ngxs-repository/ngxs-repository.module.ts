import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RepositoryStore } from './repository.store';
import { RepositoryListService, RepositoryListServiceConfig } from './repository-list.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([RepositoryStore])
  ],
  providers: [RepositoryListService]
})
export class NgxsRepositoryModule {
  static forRoot(config: any[]) {
    return {
      ngModule: NgxsRepositoryModule,
      providers: [{ provide: RepositoryListServiceConfig, useValue: { list: config } }]
    };
  }
}
