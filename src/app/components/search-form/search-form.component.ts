import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Repo } from 'src/app/classes/repo';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

    public users:any[]=[];
    public repos:any[]=[];

    constructor(private userService: UserService) { }

search(getUser:any) {
    if(getUser !== '') {
      	this.userService.getUser(getUser)
      	.subscribe((response: any) => {
        this.users.push(response);
    });

    if(getUser !== '') {
        this.userService.getRepos(getUser)
        .subscribe((response:any) => {
        this.repos = response;
    });
      }
    }
}


  ngOnInit(): void { }  
  

}
