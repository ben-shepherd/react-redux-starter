const ENV_DEVELOPMENT = 'ENV_DEVELOPMENT'
const ENV_PRODUCTION = 'ENV_PRODUCTION'
const APP_PATH = 'APP_PATH'

const AppPath = (payload) => {
    return {type: APP_PATH, payload}
}

export default {
    ENV_DEVELOPMENT,
    ENV_PRODUCTION,
    APP_PATH,
    AppPath
}