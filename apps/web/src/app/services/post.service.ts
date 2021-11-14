import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Post, PostInput, PostOutput } from '@posts/common';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, mergeMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts$ = new ReplaySubject<Post[]>(1);

  constructor(
    @Inject('API_BASE_URL') private apiBaseUrl: string,
    private http: HttpClient,
  ) {
    this.get().subscribe();
  }

  /**
   * Obtem os Posts da API.
   * @returns Posts
   */
  private get(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiBaseUrl}/posts`).pipe(
      tap(posts => {
        this.posts$.next(posts);
      })
    );
  }

  /**
   * Cria um Post.
   * @param post Post.
   * @returns { PostOutput } ID e data do Post criado.
   */
  public post(post: PostInput): Observable<Post[]> {
    return this.http.post<PostOutput>(`${this.apiBaseUrl}/posts`, post).pipe(
      mergeMap(postOutput => {
        return this.posts$.pipe(
          take(1),
          tap(posts => {
            const newPost = new Post(
              postOutput._id,
              postOutput.date,
              post.image,
              post.message,
              postOutput.user,
            );
            posts = [newPost, ...posts];
            this.posts$.next(posts);
          })
        )
      })
    );
  }

}
