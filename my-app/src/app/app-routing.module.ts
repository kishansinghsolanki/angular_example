import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FilterComponent } from './filter/filter.component';
import { TakeoperatorComponent } from './takeoperator/takeoperator.component';
import { MapComponent } from './map/map.component';
import { PagingComponent } from './paging/paging.component';
import { AppComponent } from './app.component';
import { TapoperatorComponent } from './tapoperator/tapoperator.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { ExtraPageComponent } from './extra-page/extra-page.component';
import { PromisePageComponent } from './promise-page/promise-page.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'**',redirectTo:'home'},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'filter',component:FilterComponent},
  {path:'takeoperator',component:TakeoperatorComponent},
  {path:'mapoperator',component:MapComponent},
  {path:'paging',component:PagingComponent},
  {path:'tap',component:TapoperatorComponent},
  {path:'fileupload',component:FileUploadComponent},
  {path:'asyncsubject',component:AsyncSubjectComponent},
  {path:'replaysubject',component:ReplaySubjectComponent},
  {path:'extrapage',component:ExtraPageComponent},
  {path:'promisepage',component:PromisePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
