import axios from "axios";

const KEY = "AIzaSyCG7neGoH2xTsV0cxHpvOSniXR3q7gU7LM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});

//AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGih
//AIzaSyCG7neGoH2xTsV0cxHpvOSniXR3q7gU7LM
//AIzaSyCeeAD83ZJxPP_XO-q5DOewvbY-LxsCsq8