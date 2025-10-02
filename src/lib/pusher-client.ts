import PusherClient from 'pusher-js';

// This function ensures we only create a single Pusher client instance.
const createPusherClient = () => {
  // Log a warning if the keys are missing, which is a common cause of issues.
  if (!process.env.NEXT_PUBLIC_PUSHER_KEY) {
    console.warn('NEXT_PUBLIC_PUSHER_KEY is not set. Pusher client will not be initialized.');
    return null;
  }
  if (!process.env.NEXT_PUBLIC_PUSHER_CLUSTER) {
    console.warn('NEXT_PUBLIC_PUSHER_CLUSTER is not set. Pusher client will not be initialized.');
    return null;
  }

  return new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    // You can add other client-specific options here
  });
};

export const pusherClient = createPusherClient();