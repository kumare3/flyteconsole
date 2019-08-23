import { useNodeExecutions, useWorkflow } from 'components/hooks';
import { Workflow } from 'models';
import { useMemo } from 'react';
import { mapNodeExecutionDetails } from './utils';

/** Decorates a fetchable list of NodeExecutions generated by `useNodeExecutions`,
 * mapping the list items to `DetailedNodeExecution`s. The node details are
 * pulled from the closure of a fetchable `Workflow`.
 * Note: This hook can generate output without a valid workflow value (i.e. before
 * the workflow has finished fetching). It is the responsibility of calling code
 * to use `waitForData` or `waitForAllFetchables` to prevent display of the
 * output if this would be undesirable.
 */
export function useDetailedNodeExecutions(
    nodeExecutionsFetchable: ReturnType<typeof useNodeExecutions>,
    workflowFetchable?: ReturnType<typeof useWorkflow>
) {
    const { value: nodeExecutions } = nodeExecutionsFetchable;
    let workflow: Workflow | undefined = undefined;
    if (workflowFetchable && workflowFetchable.hasLoaded) {
        workflow = workflowFetchable.value;
    }

    return {
        ...nodeExecutionsFetchable,
        value: useMemo(
            () => mapNodeExecutionDetails(nodeExecutions, workflow),
            [nodeExecutions, workflow]
        )
    };
}
