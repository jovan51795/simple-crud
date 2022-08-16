import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  header = false
  constructor(private autheService: AuthService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.header = this.autheService.getToken()
  }
}
