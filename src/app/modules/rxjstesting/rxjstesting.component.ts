import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-rxjstesting',
  templateUrl: './rxjstesting.component.html',
  styleUrls: ['./rxjstesting.component.scss'],
})
export class RxjstestingComponent implements OnInit {
  users = [
    { name: 'John', age: 25, isActive: true },
    { name: 'Jane', age: 30, isActive: false },
    { name: 'Jack', age: 35, isActive: true },
    { name: 'Jill', age: 40, isActive: false },
    { name: 'Joe', age: 45, isActive: true },
  ];

  users$ = of(this.users);
  userage$ = of(this.users.map((user) => user.age));
  useragefiltergreaterthan$ = of(this.users.filter((user) => user.age > 30));
  useragefilterlessthan$ = of(this.users.filter((user) => user.age < 30));

  constructor() {}

  ngOnInit(): void {}
}
