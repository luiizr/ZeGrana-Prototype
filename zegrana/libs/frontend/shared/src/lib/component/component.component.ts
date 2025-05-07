import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-component',
  imports: [CommonModule],
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentComponent {}
