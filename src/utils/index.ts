import { imageURL } from "../api";
import { MovieResponseData } from "../Types";

export function getImageURL(src: string, width: string = "/original"): string {
    const url = imageURL + width + src
    return url
}

const data: MovieResponseData = {
    "adult": false,
    "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    "budget": 100000000n,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 36,
            "name": "History"
        }
    ],
    "id": 872585n,
    "imdb_id": "tt15398776",
    "original_title": "Oppenheimer",
    "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "popularity": 1766.305,
    "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "production_companies": [
        {
            "id": 9996,
            "logo_path": "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
            "name": "Syncopy",
            "origin_country": "GB"
        },
        {
            "id": 33,
            "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
            "name": "Universal Pictures",
            "origin_country": "US"
        },
        {
            "id": 507,
            "logo_path": "/aRmHe6GWxYMRCQljF75rn2B9Gv8.png",
            "name": "Atlas Entertainment",
            "origin_country": "US"
        }
    ],
    "release_date": "2023-07-19",
    "revenue": 950200000n,
    "runtime": 181,
    "spoken_languages": [
        {
            "english_name": "Dutch",
            "iso_639_1": "nl",
            "name": "Nederlands"
        },
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "The world forever changes.",
    "title": "Oppenheimer",
    "vote_average": 8.164,
    "vote_count": 4902,
    "videos": {
        "results": [
            {
                "name": "Yours to Own Promo",
                "key": "UdFeVo0cODs",
                "site": "YouTube",
                "id": "652e887bea84c7010c1d8436"
            },
        ]
    },
    "credits": {
        "cast": [
            {
                "gender": 2,
                "id": 2037,
                "known_for_department": "Acting",
                "name": "Cillian Murphy",
                "original_name": "Cillian Murphy",
                "profile_path": "/gUXNwadCsnFemK7OnYpw0aZW5XB.jpg",
                "cast_id": 3,
                "character": "J. Robert Oppenheimer",
            }
        ],
        "crew": [
            {
                "gender": 2,
                "id": 282,
                "known_for_department": "Production",
                "name": "Charles Roven",
                "original_name": "Charles Roven",
                "profile_path": "/4uJLoVstC1CBcArXFOe53N2fDr1.jpg",
                "department": "Production",
                "job": "Producer"
            },
        ]
    },
}


export const getDummyMovieData = (): MovieResponseData => {
    return data
}

export const setTitle = (title: string): string => {
    document.title = title
    return title
}

export const urlString = (pageno: number, type: "Popular" | "Trending" | "Now Playing" | "Top Rated" | "Top Grosser" | "Search", query?: string | null): string => {
    switch (type) {
        case "Popular": return `/movie/popular?language=en-US&page=${pageno}&region=IN`
            break;
        case "Now Playing": return `/movie/now_playing?language=en-US&page=${pageno}&region=IN`
            break;
        case "Trending": return `/trending/movie/day?language=IN&page=${pageno}`
            break
        case "Top Rated": return `/movie/top_rated?language=en-US&page=${pageno}&region=IN`
        case "Top Grosser": return `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageno}&primary_release_year=2023&sort_by=revenue.desc&watch_region=IN&with_origin_country=IN`
            break
        case "Search": return `/search/movie?query=${query}&include_adult=false&region=IN&language=en-US&page=${pageno}`
            break
    }
}