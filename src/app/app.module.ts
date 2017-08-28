import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';
import { HomeComponent } from './template/home/home.component';
import { ServiceModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /**
     * Let's add a router to load HomeComponent as root page.
     */
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    TemplateModule,
    DynamicComponentsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
