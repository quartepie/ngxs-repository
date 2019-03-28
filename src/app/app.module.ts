import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRepositoryModule } from './ngxs-repository/ngxs-repository.module';
import { RepositoryConfig } from './ngxs-repository/repository.store';

export const testRepositoryList: RepositoryConfig[] = [{
  name: 'external-companies',
  url: {
    create: '/external-companies',
    read: '/external-companies',
    update: '/external-companies/:id',
    delete: '/external-companies/:id'
  }
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRepositoryModule.forRoot(testRepositoryList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
