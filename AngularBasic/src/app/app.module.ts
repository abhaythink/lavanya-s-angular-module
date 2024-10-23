import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { AngularListsComponent } from './angular-lists/angular-lists.component';
import { AdminAuthModule} from './admin-auth/admin-auth.module';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { FormsComponent } from './forms/forms.component'
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChildComponent } from './child/child.component';
import { ResuableComponentComponent } from './resuable-component/resuable-component.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { PipeexPipe } from './pipes/pipeex.pipe';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({ 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    AngularBasicComponent,
    AngularListComponent,
    AngularListsComponent,
    StylebindingComponent,
    FormsComponent,
    ChildComponent,
    ResuableComponentComponent,
    ChildtoparentComponent,
    PipeexPipe,
    TemplateDrivenComponent,
    ReactiveFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminAuthModule,
    FormsModule,
    NgbModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
