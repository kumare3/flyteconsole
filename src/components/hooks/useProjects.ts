import { useContext } from 'react';

import { CacheContext, ValueCache } from 'components/Cache';
import { listProjects, Project } from 'models';

import { NotFoundError } from 'errors';
import { FetchableData } from './types';
import { useFetchableData } from './useFetchableData';

const fetchableKey = Symbol('ProjectsList');
const makeProjectCacheKey = (id: string) => ({ id, collection: fetchableKey });

const doFetchProjects = async (cache: ValueCache) => {
    const projects = await listProjects();
    // Individually cache the projects so that we can retrieve them by id
    return projects.map(p =>
        cache.mergeValue(makeProjectCacheKey(p.id), p)
    ) as Project[];
};

/** A hook for fetching the list of available projects*/
export function useProjects(): FetchableData<Project[]> {
    const cache = useContext(CacheContext);

    return useFetchableData<Project[], Symbol>(
        {
            debugName: 'Projects',
            useCache: true,
            defaultValue: [],
            doFetch: () => doFetchProjects(cache)
        },
        fetchableKey
    );
}

/** A hook for fetching a single Project */
export function useProject(id: string): FetchableData<Project> {
    const cache = useContext(CacheContext);

    const doFetch = async () => {
        await doFetchProjects(cache);
        const project = cache.get(makeProjectCacheKey(id)) as Project;
        if (!project) {
            throw new NotFoundError(id);
        }
        return project;
    };

    return useFetchableData<Project, object>(
        {
            doFetch,
            useCache: true,
            debugName: 'Projects',
            defaultValue: {} as Project
        },
        makeProjectCacheKey(id)
    );
}
