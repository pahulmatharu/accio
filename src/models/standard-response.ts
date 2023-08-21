export interface StandardResponse {
    isSuccessful: boolean;
    error: Error[],
}

export interface StandardPayloadResponse<T> {
    isSuccessful: boolean;
    error?: Error[],
    payload?: T;
}

// TODO: build this out more
export interface Error {
    message: string;
}
