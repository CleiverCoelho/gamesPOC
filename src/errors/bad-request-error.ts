import { RequestError } from "protocols";

export function requestError(status: number, errors: string[]): RequestError {
    return {
      name: 'RequestError',
      data: null,
      status,
      errors,
      message: 'No result for this search!',
    };
  }