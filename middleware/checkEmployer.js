
const checkEmployer=(req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'Employer') {
        return next();
    }
    req.flash('error', 'You are not authorized to view this page!');
    res.redirect('/');
}

module.exports = checkEmployer;