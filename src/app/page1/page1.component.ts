import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit{
  pagedata:any;
  tabledata:any;
  canvasdata:any;
  constructor() { }

  ngOnInit(): void {
    this.pagedata=[
      {
        dataType: 'Submitted',
        location:'Accomodation - Shamala Towers',
        kebs:'KEBS - #CKTXXXKBS',
        admin : 'Admin - #CKTXXXADN',
        prCode:'PR Code',
        pr:'#AST567',
        amountReq:'Amount Requested',
        amount:'1,20,000',
        payModel:'Payment Model',
        pay:'Recurring',
        costCenter:'Cost Center Approvers',
        treasury : 'Treasury Approvers',
        elapsed : 'Days Elapsed',
        day: 14,
      },
      {
        dataType: 'Verified',
        location:'Accomodation - Shamala Towers',
        kebs:'KEBS - #CKTXXXKBS',
        admin : 'Admin - #CKTXXXADN',
        prCode:'PR Code',
        pr:'#AST567',
        amountReq:'Amount Requested',
        amount:'1,20,000',
        payModel:'Payment Model',
        pay:'Recurring',
        costCenter:'Cost Center Approvers',
        treasury : 'Treasury Approvers',
        elapsed : 'Days Elapsed',
        day: 14,
      },
      {
        dataType: 'Approved',
        location:'Accomodation - Shamala Towers',
        kebs:'KEBS - #CKTXXXKBS',
        admin : 'Admin - #CKTXXXADN',
        prCode:'PR Code',
        pr:'#AST567',
        amountReq:'Amount Requested',
        amount:'1,20,000',
        payModel:'Payment Model',
        pay:'Recurring',
        costCenter:'Cost Center Approvers',
        treasury : 'Treasury Approvers',
        elapsed : 'Days Elapsed',
        day: 14,
      },
      {
        dataType: 'On Disbursal',
        location:'Accomodation - Shamala Towers',
        kebs:'KEBS - #CKTXXXKBS',
        admin : 'Admin - #CKTXXXADN',
        prCode:'PR Code',
        pr:'#AST567',
        amountReq:'Amount Requested',
        amount:'1,20,000',
        payModel:'Payment Model',
        pay:'Recurring',
        costCenter:'Cost Center Approvers',
        treasury : 'Treasury Approvers',
        elapsed : 'Days Elapsed',
        day: 14,
      },
      ];
    this.tabledata=[
      {
        no: 'S.No.',
        category: 'Category',
        description: 'Description',
        invoice: 'Invoice',
        due: 'Next Payment Due On',
        approver: 'Approver',
        treasury: 'Awaiting Approval',
        noval:'1',
        categoryval:'Accomodation',
        descriptionval:'Test Description',
        invoiceval:'invoice_18_jun.pdf',
        dueval:'16 Oct 2021',
        approvalval:'Awaiting Approval',
        treasuryval:'Awaiting Approval',
      }
    ]
  }
}