interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string
}

interface Coord {
    lat: number;
    lon: number;
}

interface Main {
    temp: number;
    feels_like:number;
    temp_min: number;
    temp_max: number;
    pressure: number
    humidity: number
}

export default interface WeatherResponse {
    weather: Weather[];
    coord: Coord
    main: Main
    name: string
}