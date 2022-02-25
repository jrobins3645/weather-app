interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string
}

interface Current {
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    clouds: number;
    weather: Weather[];
}

export default interface WeatherResponse {
    current: Current;
    timezone: string
}