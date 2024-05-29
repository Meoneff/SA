import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/share.module';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  // testValue = new FormControl(true);

  person = [ {
    id:1,
    name: 'Bùi Phúc Hậu',
    date: '19/12/2002',
    email: 'hau.bp@gmail.com',
    phone: '0385244679',
  },
  {
    id:2,
    name: 'Trần Thành Huy',
    date: '19/12/2002',
    email: 'huy.th@gmail.com',
    phone: '0385244679',
  },
  {
    id:3,
    name: 'Hà Hoàng Duy',
    date: '19/12/2002',
    email: 'duy.hh@gmail.com',
    phone: '0385244679',
  }
]
 
constructor(private router: Router) {}

  addPerson() {
    this.router.navigate(['/base/create-profile']);
  }

  removePerson(index: number) {
    this.person.splice(index, 1);
  }

  // updatePerson(index: number, key: string, value: string) {
  //   this.person[index][key] = value;
  // }
}
