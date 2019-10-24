export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(options: {
    title: string;
    content?: string;
    loveIts?: number;
    createdAt?: Date;
  }) {
    this.title = options.title;
    this.content =
      options.content ||
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Pellentesque bibendum orci eget dolor bibendum, a hendrerit urna
       tristique. Praesent pretium ac ante ac commodo. Ut libero magna,
       dignissim nec sagittis id, ullamcorper vel risus. Sed ultrices
       finibus metus, quis bibendum lacus maximus at. Aliquam tempor
       tellus augue, in blandit dui efficitur non. Cras id fermentum
       odio, in gravida ligula. Duis nec neque velit.`;
    this.loveIts = options.loveIts || 0;
    this.createdAt = options.createdAt || new Date();
  }
}
