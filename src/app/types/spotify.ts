export interface SpotifyImage {
   url: string;
   height: number;
   width: number;
 }
 
 export interface Artist {
   id: string;
   name: string;
   images: SpotifyImage[];
 }

export interface Copyrights {
   text: string;
   type: string;
}

 export interface Album {
   name: string;
   id: string;
   images: SpotifyImage[];
   release_date: string;
   total_tracks: number;
   popularity?: number;
   artists?: Artist[];
   tracks: AlbumTracks;
   label?: string;
   copyrights?: Copyrights[];
 }

 export interface AlbumTrack {
   name: string;
   id: string;
   track_number: number;
   duration_ms: number;
   preview_url: string;
 }

 export interface AlbumTracks {
   items: AlbumTrack[];
 }