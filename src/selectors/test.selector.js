import {createSelector} from "reselect";

const actions = state => state.test.actions;

export const testMoreProperty = createSelector(
    actions,
    (actions) => {
        return actions.map((each, index) => {
            each.funny = each.action + " funny";
            return each;
        })
    }
);





