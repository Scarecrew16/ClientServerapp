import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { ListPlayer } from 'src/app/interfaces/playerAPI';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

    newForm = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      avatar: new FormControl('')
    });


  constructor(private api:PlayersService, private router:Router) { }

  ngOnInit(): void {
  }

  postForm(form:ListPlayer){   
    this.api.postPlayer(form).subscribe(data =>{
  console.log(data);
 })
}
}