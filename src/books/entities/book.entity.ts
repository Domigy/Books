export class Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publishYear: number;
    reserved: boolean;
    constructor(id, title, author, isbn, publishYear,
        reserved ){this.id=id;
            this.title = title;
            this.author= author;
            this.isbn= isbn;
            this.publishYear= publishYear;
            this.reserved= reserved;
        }
}
