import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.scss']
})
export class FeeDetailsComponent implements OnInit {
fee:any[]=[
  {paymentID:10011,studentID:101,paymentStatus:'Paid',fees:50000},
  {paymentID:10012,studentID:102,paymentStatus:'NotPaid',fees:45000},
  {paymentID:10013,studentID:103,paymentStatus:'NotPaid',fees:50000},
  {paymentID:10014,studentID:104,paymentStatus:'Paid',fees:45000},
  {paymentID:10015,studentID:105,paymentStatus:'Paid',fees:40000},
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
