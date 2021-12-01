import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';
import { Artist, Album } from '../types/spotify';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id!: string;
  album!: Album;
  
  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private _albums: MusicDataService) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this._albums.getAlbumById(this.id).subscribe(_albums => this.album = _albums);
  }
  
  addFav(trackID: any) {
    this._albums.addToFavourites(trackID).subscribe(
      (success) => {
        this.snackBar.open('Adding to Favourites...', 'Done', {
          duration: 15000,
        });
      },
      (err) => {
        this.snackBar.open('Unable to add song to favourites', 'Done', {
          duration: 15000,
        });
      }
    );
  }
}
