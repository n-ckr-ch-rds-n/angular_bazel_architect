import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foobar',
  templateUrl: './foobar.component.html',
  styleUrls: ['./foobar.component.scss']
})
export class FoobarComponent implements OnInit {

  @Input()
  foobar: string;

  constructor() { }

  ngOnInit(): void {
  }

}
