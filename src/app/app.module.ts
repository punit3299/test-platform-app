import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { TestDirectionComponent } from './components/test-direction/test-direction.component';
import { ModulesComponent } from './components/modules/modules.component';
import { ModuleDescriptionComponent } from './components/module-description/module-description.component';
import { McqTestComponent } from './components/mcq-test/mcq-test.component';
import { EssayTestComponent } from './components/essay-test/essay-test.component';
import { AutomataTestComponent } from './components/automata-test/automata-test.component';
import { ModuleCompletedComponent } from './components/module-completed/module-completed.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { ComprehensionComponent } from './components/comprehension/comprehension.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionsComponent,
    CreateTestComponent,
    TestDirectionComponent,
    ModulesComponent,
    ModuleDescriptionComponent,
    McqTestComponent,
    EssayTestComponent,
    AutomataTestComponent,
    ModuleCompletedComponent,
    FormatTimePipe,
    ComprehensionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
