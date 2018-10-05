/**Import class from angular*/
import { Component, OnInit } from '@angular/core';

/**Import Hero class from hero.ts*/
import { Hero } from '../hero';

//Import list of heroes
import { HEROES } from '../mock-heroes';

/**Grab the css and html*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//Initialize class and export 
export class HeroesComponent implements OnInit {
  
  //Assign class object to variable
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
  //Assign object tempalte to variable
  selectedHero: Hero;
  
  //create method and assign the hero var to Hero template
  onSelect(hero: Hero): void {

    //grab the hero var from html and assign it to selected hero
    this.selectedHero = hero;
  
  }

  //Assign list
  heroes = HEROES;
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
