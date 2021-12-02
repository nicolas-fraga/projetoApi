module.exports = (app) => {
    app.route('/users')
        .get(app.routes.users.findALL)
        .post(app.routes.users.create);

    app.route('/accounts')
        .get(app.routes.accounts.getAll)
        .post(app.routes.accounts.create);

    app.route('/accounts/:id')
    .get(app.routes.accounts.get);  
};
