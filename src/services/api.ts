import { API } from "@constants";
import { logger } from "@utils";

/**
 * API request options
 */
interface RequestOptions extends RequestInit {
  headers?: HeadersInit;
}

/**
 * API service for making HTTP requests
 */
class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API.BASE_URL;
  }

  /**
   * Generic fetch wrapper with error handling
   * @param endpoint - API endpoint
   * @param options - Fetch options
   * @returns Response data
   */
  async request<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestOptions = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      logger.info(`API Request: ${options.method || "GET"} ${url}`);
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      logger.info(`API Response:`, data);
      return data as T;
    } catch (error) {
      logger.error(`API Error:`, error);
      throw error;
    }
  }

  /**
   * GET request
   * @param endpoint - API endpoint
   * @param options - Additional options
   * @returns Response data
   */
  async get<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "GET",
      ...options,
    });
  }

  /**
   * POST request
   * @param endpoint - API endpoint
   * @param data - Request body
   * @param options - Additional options
   * @returns Response data
   */
  async post<T = any>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      ...options,
    });
  }

  /**
   * PUT request
   * @param endpoint - API endpoint
   * @param data - Request body
   * @param options - Additional options
   * @returns Response data
   */
  async put<T = any>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      ...options,
    });
  }

  /**
   * DELETE request
   * @param endpoint - API endpoint
   * @param options - Additional options
   * @returns Response data
   */
  async delete<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE",
      ...options,
    });
  }

  /**
   * Subscribe to newsletter
   * @param email - User email
   * @returns Response data
   */
  async subscribeNewsletter(email: string): Promise<any> {
    return this.post(API.ENDPOINTS.NEWSLETTER, { email });
  }

  /**
   * Submit contact form
   * @param formData - Contact form data
   * @returns Response data
   */
  async submitContact(formData: Record<string, any>): Promise<any> {
    return this.post(API.ENDPOINTS.CONTACT, formData);
  }
}

export default new ApiService();
