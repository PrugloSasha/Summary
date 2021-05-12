import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills= [`Повседневная практика показывает, что дальнейшее развитие различных форм деятельности играет важную роль в формировании модели развития.`,
   `Равным образом начало повседневной работы по формированию позиции позволяет выполнять`,
   `важные задания по разработке систем массового участия.`]
  constructor() { }
  photourl:string = "https://static6.depositphotos.com/1014014/641/i/600/depositphotos_6414239-stock-photo-diploma-frame.jpg";
  ngOnInit(): void {
  }

}
