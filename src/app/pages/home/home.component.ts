import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UserResult } from 'src/app/interfaces/usersAPI';
import { UsersService } from 'src/app/services/users.service';
import {PlayersService} from 'src/app/services/players.service'
import { Router } from '@angular/router';
import { ListPlayer } from 'src/app/interfaces/playerAPI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*constructor(private service: UsersService) { }
  users: UserResult;

  ngOnInit(): void {
    this.service.getUsers().subscribe((result:UserResult)=>{
      this.users = result;
      console.log(result);
    });
  }*/
  players:ListPlayer[];

  constructor(private api:PlayersService, private router:Router){}
  ngOnInit(): void{
    this.api.getAllPlayers(1).subscribe(data => {
      this.players = data;
    })
  }

  newPlayer(){
    this.router.navigate(['player-form']);
  }
}


