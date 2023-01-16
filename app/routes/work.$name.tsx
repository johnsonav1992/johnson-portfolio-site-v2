import React from 'react';

// Libraries
import { useParams } from '@remix-run/react';

// Data
import { 
    smallProjects
    , largeProjects
} from '~/data/work';

const ProjectDetail = () => {
    const { name: projectRoute } = useParams();

    const project = [ ...smallProjects, ...largeProjects ]
        .find( 
            project => project.route === projectRoute 
        );

    return (
        <div>{ project?.description }</div>
    );
};

export default ProjectDetail;