
export class Attributes<P extends Object> {
    constructor(private _data: P) { }

    get = <K extends keyof P>(key: K): P[K] => {
        return this._data[key]
    }

    // partial is a type that says that the object that we pass in can have any number of properties
    // it allows me to set the age or the name or both, while still enforcing the type of the object
    set(update: Partial<P>) {
        Object.assign(this._data, update) // this is a built in function that copies all the properties from the update object to the this._data object
    }

    getAllProps(): P {
        return this._data
    }


}
