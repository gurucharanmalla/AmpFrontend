import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdServiceService } from 'src/app/Service/Admin/ad-service.service';
import { AdminTicket } from '../../tsFiles/adTicket';
import { showTicket } from '../../tsFiles/showTicket';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit {

  id:number=0
  ticket:any

  constructor(private route: ActivatedRoute, private api: AdServiceService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.ticket = new showTicket(0,0,0,'',0);
    this.api.getCutomerActivity(this.id).subscribe( data => {
      console.log(data);
      this.ticket = data;
    });
  }
  }


