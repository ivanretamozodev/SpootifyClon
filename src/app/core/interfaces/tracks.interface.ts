
export interface TrackInterface {
    _id:      number;
    name:     string;
    album:    string;
    cover:    string;
    artist?:   ArtistInterface;
    url:      string;
}

export interface ArtistInterface {
    name:        string;
    nickname:    string;
    nationality: string;
}
