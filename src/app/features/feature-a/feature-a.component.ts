import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureAComponent {

}
