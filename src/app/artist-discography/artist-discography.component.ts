import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MusicDataService } from '../music-data.service';
import { Artist, Album } from '../types/spotify';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {
  id!: string;
  albums: Album[] = [];
  artist!: Artist;

  constructor(private route: ActivatedRoute, private dataService: MusicDataService) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.dataService.getArtistById(this.id).subscribe(dataService => this.artist = dataService);
    this.dataService.getAlbumsByArtistId(this.id).subscribe(response => {
      this.albums = response
        .items
        .filter((curValue: any, index: any, self: any) => self.findIndex((t:any) => t.name.toUpperCase() === curValue.name.toUpperCase()) === index);
    });
  }
}