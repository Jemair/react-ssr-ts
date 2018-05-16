module.exports = function () {
    this.cacheable();
    return "\n    import React, { Component } from 'react';\n    import Layout from 'framework/layout/layout.jsx';\n    import Header from 'component/header/header.jsx';\n    import App from '" + this.resourcePath.replace(/\\/g, '\\\\') + "';\n    export default class Page extends Component {\n      render() {\n        return <Layout {...this.props}><App {...this.props} /></Layout>;\n      }\n    }\n  ";
};
