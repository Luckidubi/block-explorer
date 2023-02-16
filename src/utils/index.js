import { Alchemy, Network, Utils } from "alchemy-sdk";




// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: "oY9MpajdXpMs5xbauzCOIbL2cVmxSXgU",
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
export const alchemy = new Alchemy(settings);

export function shortenAddress(address) {
    return address?.slice(0, 8) + "..." + address?.slice(-8);
  }

  export const formatEther = (price) => {
    return Utils.formatEther(price);
};

export function timeAgo(timestamp) {
  const secondsAgo = Math.floor((Date.now() / 1000) - timestamp);
  if (secondsAgo < 60) {
    return secondsAgo + ' seconds ago';
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return minutesAgo + ' minutes ago';
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return hoursAgo + ' hours ago';
  } else {
    const daysAgo = Math.floor(secondsAgo / 86400);
    return daysAgo + ' days ago';
  }
}