import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SubtitleDirective } from './shared/subtitle.directive';
import { ReactiveExtensionComponent, stringModifyPipe } from './Feature/reactive-extension/reactive-extension.component';
import { SlideToggleComponent } from './Feature/slide-toggle/slide-toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './shared/navigation/about/about.component';
import { FeaturedComponent } from './shared/navigation/featured/featured.component';
import { CareerComponent } from './shared/navigation/career/career.component';
import { ProjectsComponent } from './shared/navigation/projects/projects.component';
import { ContactComponent } from './shared/navigation/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubtitleDirective,
    ReactiveExtensionComponent,
    stringModifyPipe,
    SlideToggleComponent,
    AboutComponent,
    FeaturedComponent,
    CareerComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
