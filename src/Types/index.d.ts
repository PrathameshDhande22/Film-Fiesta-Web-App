export declare type ResPonseData = {
    backdrop_path: string;
    id: bigint;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_count: number;
    vote_average: number
}

export declare type ResponseArray = ResPonseData[]

export declare type ApicallData = {
    page: number,
    results: ResponseArray,
    total_pages: number,
    total_results: number
}

export interface Generes {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number,
    logo_path: string;
    name: string,
    origin_country: string
}

export interface SpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type VideoFormat = {
    name: string;
    key: string;
    site: string;
    id: string;
}

export type VideoResults = VideoFormat[]

export interface VideoResultsMain {
    results: VideoResults
}

export type Cast = {
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    profile_path: string;
    cast_id: number;
    character: string;
}

export type Casts = Cast[]

export type Crew = {
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    profile_path: string;
    department: string;
    job: string;
}

export type CastAndCrew = {
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    profile_path?: string;
    department?: string;
    job?: string;
    cast_id?: number;
    character?: string;
}

export type Crews = Crew[]

export interface Credits {
    cast: Casts;
    crew: Crews
}

export interface MovieResponseData {
    adult: boolean;
    backdrop_path: string;
    budget: bigint;
    genres: Generes[];
    id: bigint,
    imdb_id: string;
    original_title: string;
    overview: string;
    popularity: number,
    poster_path: string,
    production_companies: ProductionCompany[];
    release_date: string;
    revenue: bigint,
    runtime: number,
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
    videos: VideoResultsMain;
    credits: Credits;
}
