
import appActionTypes from '../_actions/app.action'
import config from '../config';

const envProduction = (env) => {
    return config.enviroment === appActionTypes.ENV_PRODUCTION
}

const envDevelopment = (env) => {
    return config.enviroment === appActionTypes.ENV_DEVELOPMENT
}

const isBeta = () => {
    return config.beta
}

const homepageSampleData = () => {
    return config.homepage_sample_data
}

const appServices = {
    envProduction,
    envDevelopment,
    isBeta,
    homepageSampleData,
}

export default appServices