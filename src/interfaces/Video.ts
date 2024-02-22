export interface Video {
  guid: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  isLive: boolean;
  streamUrl: string;
  genre?: string;
  startPositionInSeconds?: number;
}
