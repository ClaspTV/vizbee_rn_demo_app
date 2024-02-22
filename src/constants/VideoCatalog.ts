import {Video} from '../interfaces/Video';

export const VIDEO_CATALOG: Video[] = [
  {
    guid: 'elephants',
    title: 'Elephants Dream',
    subtitle: 'Free HLS video',
    imageUrl:
      'https://s3.amazonaws.com/vizbee/images/demoapp/elephants_dream.jpg',
    isLive: false,
    streamUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/hls/ElephantsDream.m3u8',
  },
  {
    guid: 'tears',
    title: 'Tears of Steel',
    subtitle: 'Free HLS video',
    imageUrl:
      'https://s3.amazonaws.com/vizbee/images/demoapp/20732e42e9cec9dcf99dc305cb6615e3.jpg',
    isLive: false,
    streamUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/hls/TearsOfSteel.m3u8',
  },
  {
    guid: 'akamai_live_stream',
    title: 'Akamai Live Stream',
    subtitle: 'Free HLS Live Stream',
    imageUrl:
      'https://chiefit.me/wp-content/uploads/2018/04/Akamai-Logo835x396.jpg',

    isLive: true,
    streamUrl:
      'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
  },
];
