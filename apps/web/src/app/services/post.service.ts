import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Post } from '@posts/common';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts$: Subject<Post[]> = new Subject()

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private http: HttpClient,
  ) {
    this.get().subscribe(posts => {
      this.posts$.next(posts);
    })
  }

  /**
   * Obtem os Posts da API.
   * @returns Posts
   */
  private get(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiBaseUrl}/posts`);
  }

}
