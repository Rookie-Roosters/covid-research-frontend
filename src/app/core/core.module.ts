import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootComponent } from './components';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LocalStorageService } from './services';

@NgModule({
  declarations: [RootComponent, PageNotFoundComponent],
  providers: [LocalStorageService],
  exports: [RootComponent, PageNotFoundComponent],
  imports: [RouterModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
