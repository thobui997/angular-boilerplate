import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scoped-shared-component-a',
  templateUrl: './scoped-shared-component-a.component.html',
  styleUrl: './scoped-shared-component-a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScopedSharedComponentAComponent {

}
