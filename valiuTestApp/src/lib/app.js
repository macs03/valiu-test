import SocketLoader from './socket-loader';

const globalLoaders = [SocketLoader];

export default class App {
  static socket = undefined;

  static boot() {
    return Promise.all(globalLoaders.map((s) => s.boot(App)))
      .then(() => {
        console.info('App is ready!!!');
      })
      .catch((err) => console.error(`Error while booting the app`, err));
  }
}
