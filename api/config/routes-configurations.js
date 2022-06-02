const routesConfigurations = () => {
    return {
        '/api/get-list-comments': './business/comment/get-list-comments',
        '/api/get-comment': './business/comment/get-comment',
        '/api/create-comments': './business/comment/create-comments',
        '/api/update-comments': './business/comment/update-comments'
    }
}

module.exports = { routesConfigurations }
