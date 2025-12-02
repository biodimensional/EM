import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { faLinkedin, faFacebook, faInstagram, faGit, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'Eros Montin';
  buildDate: string = new Date().toLocaleString();
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

  private _measureInterval: any = null;
  private _resizeHandler = () => this.measureLinkedInBadge();

  ngAfterViewInit(): void {
    // attempt to measure after view renders; LinkedIn widget may load async so retry a few times
    this.measureLinkedInBadge();
    // keep trying for a short while in case the badge loads asynchronously
    this._measureInterval = setInterval(() => this.measureLinkedInBadge(), 400);
    // update on window resize too
    window.addEventListener('resize', this._resizeHandler);
  }

  ngOnDestroy(): void {
    if (this._measureInterval) { clearInterval(this._measureInterval); this._measureInterval = null; }
    window.removeEventListener('resize', this._resizeHandler);
  }

  private measureLinkedInBadge(): void {
    try {
      const badge = document.querySelector('.badge-base.LI-profile-badge') as HTMLElement | null;
      if (!badge) return;

      const rect = badge.getBoundingClientRect();
      if (!rect || rect.width <= 0) return;

      // set CSS var on root — ensures left-box and badge share the same width
      const width = Math.round(rect.width);
      document.documentElement.style.setProperty('--badge-width', `${width}px`);

      // once measured, clear the interval to avoid repeated DOM reads
      if (this._measureInterval) { clearInterval(this._measureInterval); this._measureInterval = null; }
    } catch (err) {
      // swallow errors — measurement not critical
      // console.debug('measureLinkedInBadge error', err);
    }
  }
}

