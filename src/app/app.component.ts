import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  splash = true;

  constructor() {}

  ngOnInit() {
    // Ocultar el splash screen después de 3 segundos (ajusta el tiempo según tus necesidades)
    setTimeout(() => {
      this.splash = false;
    }, 3000);
  }
}
