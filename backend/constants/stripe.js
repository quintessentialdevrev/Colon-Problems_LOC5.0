const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_51MkPqBSCSA8WHCEuZMiyqMuDZOM4e2pE1sCWfxY4n3yoHKvR7oysDknIhNwfA58BO6w5FfgWPa4B4RxnWPfGjiV300I7M6Y7yy'
    : 'sk_test_51MkPqBSCSA8WHCEuZMiyqMuDZOM4e2pE1sCWfxY4n3yoHKvR7oysDknIhNwfA58BO6w5FfgWPa4B4RxnWPfGjiV300I7M6Y7yy';

const stripe = configureStripe("sk_test_51MkPqBSCSA8WHCEuZMiyqMuDZOM4e2pE1sCWfxY4n3yoHKvR7oysDknIhNwfA58BO6w5FfgWPa4B4RxnWPfGjiV300I7M6Y7yy");

module.exports = stripe;