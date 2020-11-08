import io from 'socket.io-client';
import config from './config';

export default class SocketLoader {
  static boot(App) {
    const server = `${config.server}:${config.port}`;
    const socket = io(server, {
      forceNew: true,
    });

    socket.on('connect', () => console.info('Connection Sucessfull!!'));
    App.socket = socket;
  }
}
