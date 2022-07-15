const checkLogin=(req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'User') {
        return next();
    }

    req.flash('error', 'You are not authorized to view this page!');
    res.redirect('/');
}

module.exports=checkLogin;