export declare type Callback = (response: ImagePickerResponse) => any;
export interface ImageLibraryOptions {
    mediaType: MediaType;
    maxWidth?: number;
    maxHeight?: number;
    quality?: PhotoQuality;
    videoQuality?: AndroidVideoOptions | iOSVideoOptions;
    includeBase64?: boolean;
}
export interface CameraOptions extends ImageLibraryOptions {
    durationLimit?: number;
    saveToPhotos?: boolean;
    cameraType?: string;
}
export interface ImagePickerResponse {
    didCancel?: boolean;
    errorCode?: ErrorCode;
    errorMessage?: string;
    base64?: string;
    uri?: string;
    width?: number;
    height?: number;
    fileSize?: number;
    type?: string;
    fileName?: string;
}
export declare type PhotoQuality = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
export declare type MediaType = 'photo' | 'video';
export declare type AndroidVideoOptions = 'low' | 'high';
export declare type iOSVideoOptions = 'low' | 'medium' | 'high';
export declare type ErrorCode = 'camera_unavailable' | 'permission' | 'other';
