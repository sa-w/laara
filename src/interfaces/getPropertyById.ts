export interface ApiResponse {
    status: boolean;
    message: string;
    data: PropertyData;
  }
  
  export interface PropertyData {
    map(arg0: (value: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
    description: string;
    address: Address;
    parking: null | string;
    reviews: any[];
    guestVerificationMethod: string;
    propertyRatings: null | string;
    propertyTags: any[];
    propertyLanguages: PropertyLanguage[];
    accessibilityFeatures: AccessibilityFeature[];
    cancellation: null | string;
    host: Host;
    meetingSpaces: any[];
    mealOptions: MealOption[];
    propertyImages: PropertyImage[];
    staffImages: any[];
    foodImages: FoodImage[];
    propertyOffers: any[];
    propertyAmenities: PropertyAmenity[];
    propertyPolicies: PropertyPolicy[];
    type: string;
    rooms: Room[];
  }
  
  export interface Address {
    country: string;
    county: string;
    town: string;
    street: string;
    latitude: number;
    longitude: number;
    apartment: null | string;
    city: string;
    physicalAddress: string;
    postCode: string;
  }
  
  export interface PropertyLanguage {
    language: {
      name: string;
    };
  }
  
  export interface AccessibilityFeature {
    features: {
      category: string;
      feature: string;
    };
  }
  
  export interface Host {
    firstName: string;
    lastName: string;
  }
  
  export interface MealOption {
    description: null | string;
    plan: string;
  }
  
  export interface PropertyImage {
    images: {
      url: string;
    };
  }
  
  export interface FoodImage {
    images: {
      url: string;
    };
  }
  
  export interface PropertyAmenity {
    amenities: {
      name: string;
      category: string;
      description: string;
      icon: null | string;
    };
  }
  
  export interface PropertyPolicy {
    policies: {
      description: string;
      type: string;
      isMandatory: boolean;
      penalty: null | string;
      penaltyType: null | string;
    };
  }
  
  export interface Room {
    number: string;
    roomTypes: RoomType;
  }
  
  export interface RoomType {
    id: number;
    name: string;
    description: string;
    maxGuests: number;
    typeSize: number;
    bathroom: Bathroom;
    roomTypeImages: RoomTypeImage[];
    roomTypePolicies: RoomTypePolicy[];
    roomTypeAmenities: RoomTypeAmenity[];
    bedTypes: BedType[];
    pricings: Pricing[];
  }
  
  export interface Bathroom {
    isPrivate: boolean;
    bathroomAmenties: BathroomAmenity[];
  }
  
  export interface BathroomAmenity {
    amenities: {
      category: string;
      description: string;
      name: string;
      icon: null | string;
    };
  }
  
  export interface RoomTypeImage {
    images: {
      url: string;
    };
  }
  
  export interface RoomTypePolicy {
    policies: {
      description: string;
      type: string;
      isMandatory: boolean;
    };
  }
  
  export interface RoomTypeAmenity {
    amenities: {
      description: string;
      name: string;
      category: string;
      icon: null | string;
    };
  }
  
  export interface BedType {
    bedType: {
      description: string;
      name: string;
    };
  }
  
  export interface Pricing {
    id: number;
    price: number;
    pricingOption: null | string;
    pricingMode: string;
    occupants: number;
    mealOption: MealOption;
  }
  