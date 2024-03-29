import { PostInput } from "@posts/common";

export class Post {

  constructor(
    public readonly _id: string,
    public date: number,
    public image: string,
    public message: string,
    public user: string,
    ) {
    }

    public asInput(): PostInput {
      return {
        image: this.image,
        message: this.message
      };
    }
}
