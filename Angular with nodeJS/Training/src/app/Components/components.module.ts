import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormComponent } from './Angular-Forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './Angular-Forms/template-form/template-form.component';
import { BindingComponent } from './binding/binding.component';
import { DialogComponent } from './dialog/dialog.component';
import { DirectivesComponent } from './directives/directives.component';
import { DepartmentDetailComponent } from './Routing/department-detail/department-detail.component';
import { DepartmentListComponent } from './Routing/department-list/department-list.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { SectionComponent } from './section/section.component';
import { TableComponent } from './table/table.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { AddElementComponent } from './periodic-table/add-element/add-element.component';
import { EditElementComponent } from './periodic-table/edit-element/edit-element.component';
import { DeleteElementComponent } from './periodic-table/delete-element/delete-element.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { PipeComponent } from './Pipes/pipe/pipe.component';
import { CustomPipeComponent } from './Pipes/custom-pipe/custom-pipe.component';
import { ExpansionTableComponent } from './expansion-table/expansion-table.component';
import { GameComponent } from './game/game.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { PeriodicTableService } from './Services/periodic-table.service';
import { AuthenticationService } from '../Authentication/authentication.service';
import { TokenInterceptorService } from './Services/token-interceptor.service';

import { AuthGuard } from './Services/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { CustomPipe } from './shared/custom.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { CkeditorComponent } from './ckeditor/ckeditor.component';



const routes: Routes = [
  { path: 'section', component: SectionComponent, canActivate: [AuthGuard] },
  { path: 'binding', component: BindingComponent, canActivate: [AuthGuard] },
  { path: 'template-form', component: TemplateFormComponent, canActivate: [AuthGuard] },
  { path: 'reactive-form', component: ReactiveFormComponent, canActivate: [AuthGuard] },
  { path: 'directives', component: DirectivesComponent, canActivate: [AuthGuard] },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'departments', component: DepartmentListComponent, canActivate: [AuthGuard] },
  { path: 'departments/:id', component: DepartmentDetailComponent, canActivate: [AuthGuard] },
  { path: 'periodicTable', component: PeriodicTableComponent, canActivate: [AuthGuard] },
  { path: 'userInfo', component: UserinfoComponent, canActivate: [AuthGuard] },
  { path: 'pipe', component: PipeComponent, canActivate: [AuthGuard] },
  { path: 'customPipe', component: CustomPipeComponent, canActivate: [AuthGuard] },
  { path: 'expansionTable', component: ExpansionTableComponent, canActivate: [AuthGuard] },
  { path: 'game', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'ckeditor', component: CkeditorComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },

];

@NgModule({
  declarations: [
    TableComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    BindingComponent,
    SectionComponent,
    DialogComponent,
    DirectivesComponent,
    DepartmentDetailComponent,
    DepartmentListComponent,
    PageNotFoundComponent,
    PeriodicTableComponent,
    AddElementComponent,
    EditElementComponent,
    DeleteElementComponent,
    UserinfoComponent,
    PipeComponent,
    CustomPipe,
    CustomPipeComponent,
    FilterPipe,
    ExpansionTableComponent,
    GameComponent,
    CkeditorComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,

    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatChipsModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatAutocompleteModule,

    ToastrModule.forRoot(),

  ],

  entryComponents: [
    DialogComponent,
    AddElementComponent,
    EditElementComponent,
    DeleteElementComponent
  ],
  providers: [PeriodicTableService,
    AuthenticationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }]

})
export class ComponentsModule { }
