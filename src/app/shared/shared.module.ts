import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/ui/shared-button/shared-button.component';
import { SharedDirectiveDirective } from './directives/shared-directive.directive';
import { SharedPipePipe } from './pipes/shared-pipe.pipe';


@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedDirectiveDirective,
    SharedPipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
