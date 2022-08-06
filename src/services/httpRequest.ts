import axios from 'axios';

class HttpRequest {
  async get(url: string, options = {}) {
    return axios.get(url, { ...options });
  }

  async put(url: string, data: any, options = {}) {
    return axios.put(url, data, { ...options });
  }

  async delete(url: string, id: string, options = {}) {
    return axios.delete(`${url}/${id}`, { ...options });
  }

  async post(url: string, id: string, data: any, options = {}) {
    return axios.post(`${url}/${id}`, data, { ...options });
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;