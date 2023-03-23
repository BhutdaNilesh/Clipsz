import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegisterComponent } from '../user/register/register.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  
  constructor(
    public modal: ModalService,
    private router: Router,
    public auth: AuthService,
    private afAuth:AngularFireAuth
  ) {}

  openModal(event: Event) {
    event.preventDefault();
    this.modal.toggleModal('auth');
  }

  async logout($event: Event) {
    $event.preventDefault()

    await  this.afAuth.signOut()
    this.router.navigateByUrl('/')
    alert("Successfully logout...")
  }

  
}
