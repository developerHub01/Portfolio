export interface DevToArticle {
  id: number;
  title: string;
  description: string | null;
  url: string;
  cover_image: string | null;
  published_at: string;
  tag_list: Array<string> | string;
  public_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
}
