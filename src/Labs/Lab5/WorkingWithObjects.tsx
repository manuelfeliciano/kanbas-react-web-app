import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const [module, setModule] = useState({
        id: "M123",
        name: "Name Example",
        description: "Web Dev",
        course: "CS4550"
    })
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div>
            <h3 id="wd-working-with-objects">Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>Modifying Module Properties</h4>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input
                className="form-control"
                id="wd-module-name"
                defaultValue={module.name}
                onChange={(e) =>
                    setModule({ ...module, name: e.target.value })}
            />
            <hr />

            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <input
                className="form-control"
                id="wd-module-description"
                defaultValue={module.description}
                onChange={(e) =>
                    setModule({ ...module, description: e.target.value })}
            />
            <hr />

            <h4>Retrieving Module</h4>
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${MODULE_API_URL}`}>
                Get Module
            </a>
            <hr />

            <h4>Retrieving Module Name</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>
            <hr />
        </div>

    );
}
