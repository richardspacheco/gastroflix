function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}

function fetchList(channelId) {
  const playlistId = channelId.replace(/UC(\S{22})/, 'UU$1');
  const url = `https://youtube-playlist-api.herokuapp.com/api/search?id=${playlistId}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (!res.items) return null;
      const videos = res.items;
      return videos.map((video) => ({
        url: video.snippet.resourceId.videoId,
        title: htmlDecode(video.snippet.title),
      }));
    });
}

export default {
  fetchList,
};
