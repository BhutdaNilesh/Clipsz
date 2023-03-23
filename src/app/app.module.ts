import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoModule } from './video/video.module';
import { UploadComponent } from './upload/upload.component';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { SharedModule } from "./shared/shared.module";
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        AboutComponent,
        UploadComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        BrowserAnimationsModule,
        VideoModule,
        AngularFirestoreModule,
        SharedModule,
        AngularFireStorageModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
