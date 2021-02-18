type operateCode = 0 | -1;
type responseMessage = `请求成功` | `请求失败`;

interface response {
    time: string;
    code: operateCode;
    message: responseMessage;
    statusCode?: number;
}

interface errorDetails {
    status?: number;
    error?: string;
    path?: string;
    params?: Record<string, any>;
    query?: Record<string, any>;
    body?: Record<string, any>;
}

export interface errorResponse extends response {
    details: errorDetails;
}

export interface successResponse<T> extends response {
    data: T;
}
