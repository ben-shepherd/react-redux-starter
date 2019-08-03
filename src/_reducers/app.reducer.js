
import appServices from '../_services/app.service'
import appAction from '../_actions/app.action';

const initialState = {
    dev: appServices.envDevelopment(),
    beta: appServices.isBeta() || true,
    path: window.location.pathname,
}


const app = (state = initialState, action) => {
    switch(action.type) {
        case appAction.APP_PATH:
            return {
                ...state,
                path: action.payload,
            }
        default:
            return state
    }
}

export default app