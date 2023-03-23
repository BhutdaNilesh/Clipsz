import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  isDragover = false;
  file: File | null = null;
  nextStep = false;
  inSubmission = false;
  percentage = 0;

  title = new FormControl('', [Validators.required, Validators.minLength(3)]);

  uploadForm = new UntypedFormGroup({
    title: this.title,
  });

  constructor(private storage: AngularFireStorage) {}

  storeFile($event: Event) {
    this.isDragover = false;
    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null;

    if (!this.file || this.file.type !== 'video/mp4') {
      alert('Enter only video files or mp4 files...');
      return;
    }
    console.log(this.file);
    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
    this.nextStep = true;
  }

  uploadFile() {
    this.inSubmission = true;
    const clipFileName = uuid();
    const clipPath = `clips/${clipFileName}.mp4`;
    console.log('File Uploaded');
    const task = this.storage.upload(clipPath, this.file);
    task.percentageChanges().subscribe((progress) => {
      this.percentage = progress as number;
      alert("Your file is uploading please wait..")
    });
  }
}
