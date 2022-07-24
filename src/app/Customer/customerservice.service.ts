import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Customer} from'./customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
   
  private baseUrl='http://localhost:8098/customerprofile';
  constructor(private httpClient:HttpClient) { }
  getCustomerList(): Observable<Customer[]> {  
    return this.httpClient.get<Customer[]>(`${this.baseUrl}/customerlist`);  
  } 
  deleteCustomer(customerId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/customer/${customerId}`, { responseType: 'text' });
  }  
   updateCustomer(customer:Customer): Observable<Object> {  
    return this.httpClient.post(`${this.baseUrl}/customer`, customer);  
  }
  insertCustomer(customer:Customer):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/customer`, customer); 
  }
  validateCustomer(username:String,password:String):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl}/validate/${username}/${password}`, { responseType: 'text' });
  }
  getCustomerById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/profile/${id}`);
  }
}
