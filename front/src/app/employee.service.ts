import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee:Employee;
  readonly URL_API?'http://http://localhost:3000/api/employees';

    constructor(private http:HttpClient) { }

    getEmployees(){
      return this.http.get(this.URL_API)
        
    }
    postEmployee(Employee:Employee){
      return this.http.post(this.URL_API, Employee);
    }
}
//https://www.youtube.com/watch?v=ccBtSAMFjto&t=443s
