import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Post, PostOutput } from '@posts/common';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts$ = new Subject<Post[]>();

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private http: HttpClient,
  ) {
    this.get().subscribe(posts => {
      this.posts$.next(posts);
    });
  }

  /**
   * Obtem os Posts da API.
   * @returns Posts
   */
  private get(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiBaseUrl}/posts`);
  }

  /**
   * Cria um Post.
   * @param post Post.
   * @returns { PostOutput } ID e data do Post criado.
   */
  public post(post: Post): Observable<PostOutput> {
    return this.http.post<PostOutput>(`${this.apiBaseUrl}/posts`, post.asInput())
  }

}
