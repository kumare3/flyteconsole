import * as React from 'react';
import {
    createInputValueCache,
    InputValueCacheContext
} from './inputValueCache';
import { LaunchWorkflowForm } from './LaunchWorkflowForm';
import { LaunchFormProps, LaunchWorkflowFormProps } from './types';

function isWorkflowPropsObject(
    props: LaunchFormProps
): props is LaunchWorkflowFormProps {
    return (props as LaunchWorkflowFormProps).workflowId !== undefined;
}

/** Renders the form for initiating a Launch request based on a Workflow or Task */
export const LaunchForm: React.FC<LaunchFormProps> = props => {
    const [inputValueCache] = React.useState(createInputValueCache());

    // TODO: Use LaunchTaskForm when it has been implemented.
    return (
        <InputValueCacheContext.Provider value={inputValueCache}>
            {isWorkflowPropsObject(props) ? (
                <LaunchWorkflowForm {...props} />
            ) : null}
        </InputValueCacheContext.Provider>
    );
};