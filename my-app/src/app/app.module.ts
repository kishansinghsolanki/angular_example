import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FilterComponent } from './filter/filter.component';
import { TakeoperatorComponent } from './takeoperator/takeoperator.component';
import { MapComponent } from './map/map.component';
import { PagingComponent } from './paging/paging.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TapoperatorComponent } from './tapoperator/tapoperator.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { ExtraPageComponent } from './extra-page/extra-page.component';
import { PromisePageComponent } from './promise-page/promise-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    FilterComponent,
    TakeoperatorComponent,
    MapComponent,
    PagingComponent,
    TapoperatorComponent,
    FileUploadComponent,
    AsyncSubjectComponent,
    ReplaySubjectComponent,
    ExtraPageComponent,
    PromisePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
