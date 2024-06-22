export class MovieDto {
    title: string;
    releaseDate: number;

    constructor(title: string, releaseDate: number) {
        this.title = title;
        this.releaseDate = releaseDate;
    }
}