interface ImageProps {
    src: string;
    width?: number | string;
    height?: number | string;
    alt: string;
    className?: string;
    styles?: CSSProperties;
}

interface Book{
    bookName:string;
    isbn:string;
    category:string;
    rowNo:number;
    bookCount:number;
    cost:number;
    availabity?:boolean;
    coverImage?:string;
    isFavourite?: boolean;
    [key?: string]: any;
}

interface BookEdit{
    bookName?:string;
    category?:string;
    rowNo?:number;
    bookCount?:number;
    cost?:number;
    availabity?:boolean;
    coverImage?:string;
    isFavourite?: boolean;
    [key?: string]: any;
}