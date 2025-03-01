const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,      // 固定播放器在页面底部
  autoplay: false,  // 是否自动播放
  theme: '#007bff', // 主题颜色（蓝白色系）
  // lrcType: 3,
  audio: [
      {
          name: '造梦西游4-土木',
          artist: '宋辞赋',
          url: '/music/造梦西游4.ogg',
          // cover: 'cover1.jpg',
          // lrc: 'lrc1.lrc',
          theme: '#ebd0c2'
      },
      {
          name: '稻香',
          artist: '周杰伦',
          url: '/public/music/周杰伦 - 稻香.mp3',
          // cover: 'cover2.jpg',
          // lrc: 'lrc2.lrc',
          theme: '#46718b'
      }
  ]
});