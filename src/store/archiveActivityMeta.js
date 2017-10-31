import constants from '../meta/constants';

// ==================================================================

export const archiveActivityMeta = (state = {afterXdays: 30, deleteAfter: 365}, action) => {
    switch(action.type) {
        case constants.UPDATE_ARCHIVE_ACTIVITIES_META:
            return action.payload;
        default:
            return state;
    }
}