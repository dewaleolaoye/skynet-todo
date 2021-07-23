import { SkynetClient } from 'skynet-js';

const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

const client = new SkynetClient(portal);
// const client = new SkynetClient('https://siasky.net');
const hostApp = 'host-app.hns';
const path = 'app.hns/path/file.json';

export { client, hostApp, path, portal };
