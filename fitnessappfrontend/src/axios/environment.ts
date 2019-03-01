const dev = {
    appContext: 'http://ec2-13-58-166-107.us-east-2.compute.amazonaws.com:5500' // api url
};

const prod = {
    appContext: 'http://ec2-18-236-190-255.us-west-2.compute.amazonaws.com:3000'
};

export let environment = dev;

if (process.env.NODE_ENV === 'production') {
    environment = prod;
}