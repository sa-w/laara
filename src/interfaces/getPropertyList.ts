export interface ApiPropertyListResponse {
    status: boolean;
    message: string;
    data: Stay[];
}

export interface Stay {
    id: number;
    name: string;
    description: string;
    address: Address;
    _count: Count;
    propertyRatings: number | null;
    propertyTags: string[];
    propertyImages: ImageWrapper[];
    staffImages: ImageWrapper[];
    foodImages: ImageWrapper[];
    mealOptions: MealOption[];
    rooms: Room[];
}

export interface Address {
    country: string;
    county: string;
    town: string;
    street: string;
    city: string;
    latitude: number;
    longitude: number;
}

export interface Count {
    reviews: number;
}

export interface ImageWrapper {
    images: Image;
}

export interface Image {
    url: string;
}

export interface MealOption {
    plan: string;
    description: string | null;
}

export interface Room {
    roomTypes: RoomType;
}

export interface RoomType {
    name: string;
    description: string;
    pricings: Pricing[];
    roomTypeImages: ImageWrapper[];
}

export interface Pricing {
    id: number;
    price: number;
    pricingOption: string | null;
    pricingMode: string;
    occupants: number;
    mealOption: MealOption;
}
