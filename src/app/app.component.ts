import { Component } from '@angular/core';
import { faLinkedin,faFacebook,faInstagram,faGit,faGoogle } from '@fortawesome/free-brands-svg-icons';
import {faAddressCard} from '@fortawesome/free-regular-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eros Montin';
  lin = faLinkedin;
  fa = faFacebook;
  in = faInstagram;
  gi = faGit;
  ad = faAddressCard;
  at = faGoogle;
}
