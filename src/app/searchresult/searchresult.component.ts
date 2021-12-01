import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  results: any;
  searchQuery: string | null = "";

  constructor(private route: ActivatedRoute, private dataService: MusicDataService) {
    this.route.queryParamMap.subscribe((params) => {
      this.searchQuery = params.get('q');
    });
  }

  ngOnInit(): void {
    this.dataService.searchArtists(this.searchQuery).subscribe(data => {
      this.results = data.artists.items
      .filter((item: any) => item.images.length > 0);
    })
  }

}
