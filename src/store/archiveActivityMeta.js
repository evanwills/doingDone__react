import {constants} from '../meta/constants';


// ===============================================
// START: actionCreators


export const archiveActivityMetaAction = (archiveDays, deleteDays) => {
    return {
        type: constants.UPDATE_ARCHIVE_ACTIVITIES_META,
        payload: {
            afterXdays: archiveDays,
            deleteAfter: deleteDays
        }
    }
}


//  END:  actionCreators
// ===============================================
// START: reducers

export const archiveActivityMeta = (state = {afterXdays: 30, deleteAfter: 365}, action) => {
    switch(action.type) {
        case constants.UPDATE_ARCHIVE_ACTIVITIES_META:
            return action.payload;
        default:
            return state;
    }
}

//  END:  reducers
// ===============================================