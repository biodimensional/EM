import { Component } from '@angular/core';
import { faLinkedin, faFacebook, faInstagram, faGit, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private titleService: Title, private meta: Meta) {
    // Set the browser tab title
    this.titleService.setTitle('Dr. Eros Montin Ph.D. | Biomedical Research Expert');

    // Update the meta tag with a description
    this.meta.updateTag({
      name: 'description',
      content: 'Explore Dr. Eros Montin expertise in biomedical imaging, big data, cloud computing, AI, and biodimensional innovations.'
    });
  }
}
