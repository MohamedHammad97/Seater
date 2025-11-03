export interface AuthUser {
    name: string,
    email: string,
    phone: string,
    password: string,
    rePassword:string
}

export interface LoginUser {
    email: string,
    password: string,
}

export interface SchoolFormData {
    name: String,
    phone: Number,
    phone2: Number,
    city: String,
    address:String,
    schoolName:String,
    schoolLocation: String,
    students:Number,
    educationalSection:String,
    educationalStage:String,
    carType:String,
    subscribedBefore:String,
    comment:String,
    latitude:Number,
    longitude:Number,
}
