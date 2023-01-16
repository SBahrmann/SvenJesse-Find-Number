import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  combinations: string[] = [];
  major = 1;
  minor = 1;
  patch = 1;
  value: string | undefined = undefined;
  result: number | undefined = undefined;
  index: number | undefined = undefined;

  constructor() {
    this.combinations = [];

    let str = '';

    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        for (let k = 1; k <= 6; k++) {
          this.combinations.push(`${i}.${j}.${k}`);
        }
      }
    }
  }

  search() {
    this.value = `${this.major}.${this.minor}.${this.patch}`;
    this.result = this.major * this.minor * this.patch;
    this.index = this.combinations.findIndex(val => val === this.value) + 1;
  }

  getResult(combi: string) {
    const combiSplit = combi.split('.');
    return Number(combiSplit[0]) * Number(combiSplit[1]) * Number(combiSplit[2]);
  }

}
