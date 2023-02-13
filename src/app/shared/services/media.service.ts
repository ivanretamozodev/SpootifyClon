import { Injectable } from '@angular/core';
import { TrackInterface } from '@core/interfaces/tracks.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MediaService {
    public audio!: HTMLAudioElement;
    trackInfo$: BehaviorSubject<TrackInterface | undefined> = new BehaviorSubject<
        TrackInterface | undefined
    >(undefined);
    public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
    public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
    public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
    public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor() {
        this.audio = new Audio();
        this.trackInfo$.subscribe((responseOK) => {
            if (responseOK) {
                this.setAudio(responseOK);
            }
        });
        this.listenEvents();
    }

    private listenEvents(): void {
        this.audio.addEventListener('timeupdate', this.calculateTime, false);
        this.audio.addEventListener('playing', this.setPlayerStatus, false);
        this.audio.addEventListener('play', this.setPlayerStatus, false);
        this.audio.addEventListener('pause', this.setPlayerStatus, false);
        this.audio.addEventListener('ended', this.setPlayerStatus, false);
    }

    /*
     * La funcion calculate time,destructura del audio,y manda a llamar a dos funciones,
     *setTimeDisplay: formatea los minutos y segundos,los cuales son transferidos via observable
     *setRemainingTime: resta el tiempo de la duracion de la cancion,menos el tiempo actual.
     *setPercentage: calcula la barra de progreso de el reproductor
     */
    private calculateTime = (): void => {
        const { duration, currentTime } = this.audio;
        this.setTimeDisplay(currentTime);
        this.setRemainingTime(currentTime, duration);
        this.setPercentage(currentTime, duration);
    };
    private setTimeDisplay(current: number) {
        let seconds = Math.floor(current % 60);
        let minutes = Math.floor((current / 60) % 60);

        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const displayFormat = `${displayMinutes}: ${displaySeconds}`;
        this.timeElapsed$.next(displayFormat);
    }

    private setRemainingTime(currentTime: number, duration: number): void {
        const timeLeft = duration - currentTime;
        let seconds = Math.floor(timeLeft % 60);
        let minutes = Math.floor((timeLeft / 60) % 60);

        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const displayFormat = `-${displayMinutes}: ${displaySeconds}`;
        this.timeRemaining$.next(displayFormat);
    }

    private setPercentage(currentTime: number, duration: number): void {
        let percentage = (currentTime * 100) / duration;
        this.playerPercentage$.next(percentage);
    }

    private setPlayerStatus = (state: Event): void => {
        switch (state.type) {
            case 'play':
                this.playerStatus$.next('play');
                break;
            case 'playing':
                this.playerStatus$.next('playing');
                break;
            case 'ended':
                this.playerStatus$.next('ended');
                break;
            default:
                this.playerStatus$.next('paused');
                break;
        }
    };

    public setAudio(track: TrackInterface): void {
        this.audio.src = track.url;
        this.audio.play();
    }
    public togglePlayer(): void {
        this.audio.paused ? this.audio.play() : this.audio.pause();
    }
}
