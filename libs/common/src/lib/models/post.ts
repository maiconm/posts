export class Post {

  constructor(
    public readonly _id: number,
    public image: string,
    public message: string,
    public user: string,
  ) {
  }
}
