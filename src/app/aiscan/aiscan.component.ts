import { Component } from '@angular/core';

@Component({
  selector: 'app-aiscan',
  imports: [],
  templateUrl: './aiscan.component.html',
  styleUrl: './aiscan.component.css',
})
export class AiscanComponent {
  videoStream: MediaStream | null = null;

  async scanFood() {
    if (!navigator.mediaDevices) {
      alert('mediaDevices is not supported. Open using localhost or HTTPS.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      const video = document.getElementById('video') as HTMLVideoElement;

      if (video) {
        video.srcObject = stream;
        await video.play();
      }
    } catch (err: any) {
      console.error(err);
      alert(err.name + ': ' + err.message);
    }
  }
  uploadImage() {
    console.log('Uploading Image...');
    // Image upload functionality will be added here
  }
}
