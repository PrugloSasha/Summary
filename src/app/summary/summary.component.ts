import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  FIO:string = "Пругло Александр Александрович";
  Phonenumber:string = "+380730924230";
  Email:string = "sasha0007001@gmail.com";
  City:string = "Kryvui Rig";
  PersonPhotoUrl:string = "https://mystatfiles.itstep.org/index.php?view_key=rtILv2awXkYrSQ7WVzOr0G9F1kZwIdRQC03dLrvYiKdQjauLGaassgZXlHeDA2IYwJj%2FTZ4UGgA4aEr6r49euXwElP1GRS0jSWhk79%2FdZfY%3D";
  constructor() { }

  ngOnInit(): void {
  }

}
