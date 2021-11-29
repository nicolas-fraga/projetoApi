module.exports = (app) => {
    app.route('/users')
        .get(app.routes.users.findALL)
        .post(app.routes.users.create);

    app.route('/accounts')
        .post(app.routes.accounts.create)
};
