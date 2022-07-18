
import { ArtistModel } from "@core/interfaces/artist.interface";
export interface TrackInterface {
    _id:      number| string;
    name:     string;
    album:    string;
    cover:    string;
    artist?:   ArtistModel;
    url:      string;
}

