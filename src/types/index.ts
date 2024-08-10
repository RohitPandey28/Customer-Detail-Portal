export interface Customer {
    id: number;
    name: string;
    body: string;
    address?: string;
  }
  
  export interface Photo {
    id: string;
    download_url: string;
  }