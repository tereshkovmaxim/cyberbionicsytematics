import { Component, OnInit } from '@angular/core';
import { DataService } from '../_shared/data.service';
import { Player } from '../_shared/player';
import { Options } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  playersList: Array<Player>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.dataService.getJSON()
      .subscribe(
        data => this.playersList = data,
        error => console.log(error)
      );
  }

  search(value) {
    if (value === '') {
      this.updateData();
    }
    const options: {} = this.parseQuery(value);
    if (options === null || !options.hasOwnProperty('search')) {
      return;
    }
    this.filter(options);
  }

  filter(options: {}) {
    const temp: Array<Player> = [];
    const tempSearch = options['search'].split(' ');

    tempSearch.forEach( el => {
      this.playersList.forEach( player => {
        for (const key in player) {
          if (RegExp(el, 'i').test(player[key])) {
            temp.push(player);
          }
        }
      });
      if (temp.length > 0) {
        this.playersList = [...temp];
        temp.length = 0;
      }
    });
    console.log(this.playersList);
  }

  private parseQuery(value: string) {
    // const pattern = /(^[\w\s\d]+)(?:"(\w+)")*\s*(?:-(\w+))*/gi;
    const options = /(.+)(?:-(.+))*/.exec(value);
    return options ? {search: options[1], exception: options[2]} : null;
  }
}

