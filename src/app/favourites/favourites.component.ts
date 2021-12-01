import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { Artist, Album } from '../types/spotify';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites!: Array<any>;

  constructor(private dataService: MusicDataService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.dataService.getFavourites().subscribe(data => {
      this.favourites = data.tracks;
    });
  }

  removeFromFavourites(id:any) {
    this.dataService.removeFromFavourites(id).subscribe(data => {
      this.favourites = data.tracks;
    });
  }
}
