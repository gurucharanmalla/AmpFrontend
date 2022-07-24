import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/Admin/tsFiles/Activity';
import { AdminTicket } from 'src/app/Admin/tsFiles/adTicket';
import { showTicket } from 'src/app/Admin/tsFiles/showTicket';
import { Admin } from 'src/app/Admin/tsFiles/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl='http://localhost:8091/appadmin';

getActivities(){
  return this.http.get<Activity[]>("http://localhost:8091/appadmin/actall");
}

saveAdmin(data: any){
  return this.http.post<any>("http://localhost:8091/appadmin/saveAdmin",data)
}

/*getCutomerActivity(): Observable<customerIdd>{

/*  const httpparams = new HttpParams({
   fromObject:{
      customerId:customerIdd
    }
  });

  let params = new HttpParams().set("customerId", customerIdd);
  return this.http.get<any>("http://localhost:8091/appadmin/allcus",{params});
}
*/

getCutomerActivity(id:number):Observable<showTicket>{

  return this.http.get<showTicket>('http://localhost:8091/appadmin/allcus?customerId='+id)
}




getAllTickets(){
  return this.http.get<AdminTicket[]>("http://localhost:8091/appadmin/adAllTicket");
}

getAdminById(id: number): Observable<Admin>{
  return this.http.get<Admin>(`${this.baseUrl}/view/${id}`);
}

updateAdmin(admin:Admin): Observable<Object> {  
  return this.http.post(`${this.baseUrl}/adAdmin`, admin);  
}


}
