import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.scss']
})
export class BranchDetailsComponent implements OnInit {
branch:any[]=[
  {branchID:1001,branchName:'Science',branchFee:50000},
  {branchID:1002,branchName:'Commerce',branchFee:45000},
  {branchID:1003,branchName:'Arts',branchFee:40000},
]
  constructor() { }

  ngOnInit(): void {
  }

}
