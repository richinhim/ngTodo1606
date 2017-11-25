import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MemberVO} from "../../domain/member.vo";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {AuthGuardService} from "../auth-guard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  member = new MemberVO();

  authState: Observable<firebase.User>;
  currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private router: Router,  private authGuard: AuthGuardService) {

    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        // 로그인이 성공하면 호출 - 핵심 로직
        // 실제로직은 여기에 들어간다.
        this.currentUser = user;
        console.log(this.currentUser);
        // 소셜 로그인 성공후 서버에 인증 및 권한 획득 - 핵심 로직
        this.member.email = this.currentUser.email;
        this.member.photo_url = this.currentUser.photoURL;
        this.authGuard.login(this.member);
      } else {
        this.currentUser = null;
      }
    });
  }

  ngOnInit() {
  }

  signupWithPassword() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.member.email,
      this.member.pw)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  loginWithPassword() {
    this.afAuth.auth.signInWithEmailAndPassword(this.member.email, this.member.pw)
      .then(data => {
        console.log(data);
      });
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(data => {
        console.log('signInWithPopup', data);
      });
  }

}
