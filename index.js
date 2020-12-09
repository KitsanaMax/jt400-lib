const config = {
    host: '156.71.3.109',
    user: 'HDMSUSER',
    password: 'hdms112020',
    'translate binary': 'true',
    libraries: 'IDS2001D'
}

const pool = require('node-jt400').pool(config);

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
