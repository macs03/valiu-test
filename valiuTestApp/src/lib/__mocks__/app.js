import SocketLoader from '../socket-loader';

export default class App {
  static socket = {
    on: jest.fn(),
  };

  static boot() {
    SocketLoader.boot(App);
    return new Promise((resolve, reject) => {});
  }
}
