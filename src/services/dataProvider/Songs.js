import lyrics from './lyrics'

export class Songs {
    constructor() {
        this.songs = lyrics;
        this.songs.sort((a, b) => parseInt(a.name.split('-')) - parseInt(b.name.split('-')));
        this.songs.forEach(song => {
            song.title = song.name.split("-");
            song.title[1] = song.title[1].charAt(0).toUpperCase() + song.title[1].slice(1);
            song.title = song.title.join(" ");
            song.content = song.content.replace(/\n/g, '  \n');

        })
    }
}
