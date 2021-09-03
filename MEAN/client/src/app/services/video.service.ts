import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Video } from '../shared/video';

const url = environment.appURL

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  ApiUrl = url;
  _getUrl = "videoplayer/videos/";
  _postUrl = "videoplayer/video";
  _putUrl = "videoplayer/video/";
  _deleteUrl = "videoplayer/video/";

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get(this.ApiUrl + this._getUrl)
  }

  addVideo(video: Video) {
    return this.http.post(this.ApiUrl + this._postUrl, video)
  }

  updateVideo(video: Video) {
    return this.http.put(this.ApiUrl + this._putUrl + video._id, video);
  }

  deleteVideo(video: Video) {
    return this.http.delete(this.ApiUrl + this._deleteUrl + video._id);
  }
}




