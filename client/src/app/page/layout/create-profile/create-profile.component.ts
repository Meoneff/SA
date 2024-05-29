import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/share.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.scss'
})
export class CreateProfileComponent {
  readonly addPerson = new FormGroup({
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
});

constructor() {}

  create() {
    
  }
}
