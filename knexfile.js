module.exports = {
    test: {
        client: 'pg',
        version: '14.1',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'b5b4b3b2b1@',
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};
