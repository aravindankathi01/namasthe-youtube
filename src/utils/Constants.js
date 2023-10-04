export const API_KEY_AUTH = "AIzaSyBO85DFTSitzefICvXwNCa17zW32CBhZ0I";

export const VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY_AUTH}`;

export const CHANNEL_API =
  "GET https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyA20MzU99wjT1APVWFzSwcMRL18zpGmV5w";

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]
// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
