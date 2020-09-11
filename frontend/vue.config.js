// eslint-disable-next-line no-undef
module.exports = {
  // Change build paths to make them Maven compatible
  // see https://cli.vuejs.org/config/
  outputDir: 'target/dist',
  assetsDir: 'static',
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      '/api': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'http://localhost',
      },
    },
  },
};
