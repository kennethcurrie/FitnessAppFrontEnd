const dev = {
    appContext: 'http://localhost:5500' // api url
};

const prod = {
    appContext: 'http://ec2-18-236-190-255.us-west-2.compute.amazonaws.com:3000'
};

export let environment = dev;

if (process.env.NODE_ENV === 'production') {
    environment = prod;
}