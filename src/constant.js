import { genKeyPairFromSeed, SkynetClient } from 'skynet-js';

const portal =
  window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

const client = new SkynetClient(portal);
// const client = new SkynetClient('https://siasky.net');
const hostApp = 'host-app.hns';
const dataKey = 'myApp';

const { publicKey } = genKeyPairFromSeed(
  'this seed should be fairly long for security AMAZING UPRIGHT SKYNET AWESOME'
);

const { privateKey } = genKeyPairFromSeed(
  'this seed should be fairly long for security OKAY, ALRIGHT HANDSOME BEAUTIFUL INTERESTING'
);

export { client, hostApp, publicKey, privateKey, dataKey };
