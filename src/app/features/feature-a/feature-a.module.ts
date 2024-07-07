import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a.component';
import { ScopedSharedComponentAComponent } from './components/scoped-shared-component-a/scoped-shared-component-a.component';


@NgModule({
  declarations: [
    FeatureAComponent,
    ScopedSharedComponentAComponent
  ],
  imports: [
    CommonModule,
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }
