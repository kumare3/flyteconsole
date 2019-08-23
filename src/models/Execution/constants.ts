import {
    NodeExecutionPhase,
    TaskExecutionPhase,
    WorkflowExecutionPhase
} from './enums';

export const terminalNodeExecutionStates: NodeExecutionPhase[] = [
    NodeExecutionPhase.ABORTED,
    NodeExecutionPhase.FAILED,
    NodeExecutionPhase.SKIPPED,
    NodeExecutionPhase.SUCCEEDED,
    NodeExecutionPhase.TIMED_OUT
];

export const terminalTaskExecutionStates: TaskExecutionPhase[] = [
    TaskExecutionPhase.ABORTED,
    TaskExecutionPhase.FAILED,
    TaskExecutionPhase.SUCCEEDED
];

export const terminalExecutionStates: WorkflowExecutionPhase[] = [
    WorkflowExecutionPhase.ABORTED,
    WorkflowExecutionPhase.FAILED,
    WorkflowExecutionPhase.SUCCEEDED,
    WorkflowExecutionPhase.TIMED_OUT
];

export const executionSortFields = {
    createdAt: 'created_at',
    startedAt: 'started_at'
};
