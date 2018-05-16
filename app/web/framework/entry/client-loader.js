module.exports = function () {
    this.cacheable();
    return "\n    import React from 'react';\n    import ReactDom from 'react-dom';\n    import { AppContainer } from 'react-hot-loader';\n    import Entry from '" + this.resourcePath.replace(/\\/g, '\\\\') + "';\n    const state = window.__INITIAL_STATE__;\n    const render = (App)=>{\n      ReactDom.hydrate(EASY_ENV_IS_DEV ? <AppContainer><App {...state} /></AppContainer> :\n        <App {...state} />, document.getElementById('app'));\n    };\n\n    if (EASY_ENV_IS_DEV && module.hot) {\n      module.hot.accept('" + this.resourcePath.replace(/\\/g, '\\\\') + "', () => { render(Entry) });\n    }\n    render(Entry);\n  ";
};
