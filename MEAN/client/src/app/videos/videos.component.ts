import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Video } from '../shared/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  // playList: Video[] = [
  //   { "_id": "1", "title": "Title 1", "url": "url 1", "description": "description 1" },
  //   { "_id": "2", "title": "Title 2", "url": "url 2", "description": "description 2" },
  //   { "_id": "3", "title": "Title 3", "url": "url 3", "description": "description 3" },
  //   { "_id": "4", "title": "Title 4", "url": "url 4", "description": "description 4" },
  // ];

  playList: Array<Video>;
  selectedVideo: Video;   // Used for property binding with video-detail
  hidenewVideo: boolean = false;

  constructor(public videoService: VideoService) { }

  //Getting all videos
  ngOnInit(): void {
    this.videoService.getVideos().subscribe(res => {
      this.playList = res as any;
      console.log(res);
    },
      err => {
        if (err) throw err;
      });
  }

  // Fires when New Video button Clicked
  newVideo() {
    this.hidenewVideo = false;
    this.ngOnInit();
  }

  //SelectVideo Event Emitter fires this handler
  onSelectVideo(video: any) {
    this.selectedVideo = video;      // this helps in storing all the info of that particular video
    this.hidenewVideo = true;
    this.ngOnInit();
    console.log(this.selectedVideo);
  }

  // Adding Video 
  onSubmitAddVideo(video: Video) {
    this.videoService.addVideo(video).subscribe(
      res => {
        this.playList.push(res as any);
        this.selectedVideo = res as any;
        this.hidenewVideo = true;
        console.log(res)
      }
      , err => {
        if (err) throw err;
      })

  }

  //Updating Video --- updateVideoEvent fires this handler
  onUpdateVideoEvent(video: any) {
    this.videoService.updateVideo(video).subscribe(res => {
      video = res;
      // this.selectedVideo = null;
      console.log(res);
      this.ngOnInit();
    }, err => {
      if (err) throw err;
    });

  };

  //Deleting Video --- deleteVideoEvent fires this handler
  onDeleteVideoEvent(video: any) {
    let videoArray = this.playList;
    this.videoService.deleteVideo(video).subscribe(res => {
      console.log(res);
      for (let i = 0; i < videoArray.length; i++) {
        if (videoArray[i]._id === video._id) {
          videoArray.splice(i, 1);
        }
      }
      this.hidenewVideo = false;
      // this.selectedVideo = null;
    }, err => {
      if (err) throw err;
    });


  };
}

