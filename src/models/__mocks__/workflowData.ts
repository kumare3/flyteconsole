import { Admin } from 'flyteidl';
import { Identifier } from '../Common';
import { Workflow, WorkflowClosure } from '../Workflow';
import * as simpleClosure from './simpleWorkflowClosure.json';

const decodedClosure = Admin.WorkflowClosure.create(
    simpleClosure
) as WorkflowClosure;

const workflowId: (name: string, version: string) => Identifier = (
    name,
    version
) => ({
    name,
    version,
    project: 'flyte',
    domain: 'development'
});

export const createMockWorkflow: (
    name: string,
    version?: string
) => Workflow = (name: string, version: string = 'abcdefg') => ({
    id: workflowId(name, version)
});

export const createMockWorkflowClosure: () => WorkflowClosure = () => ({
    ...decodedClosure
});

export const createMockWorkflows: Fn<Workflow[]> = () => [
    createMockWorkflow('workflow1'),
    createMockWorkflow('workflow2'),
    createMockWorkflow('workflow3')
];
