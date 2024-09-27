import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleNofityPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("nofity")
            .get(urlParams.singleNofityId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Nofity", type: "error", message: error.message || "Failed get nofity" });
            });
    }, [props,urlParams.singleNofityId]);


    const goBack = () => {
        navigate("/nofity");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Nofity</h3>
                </div>
                <p>nofity/{urlParams.singleNofityId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tajuk</label><p className="m-0 ml-3" >{_entity?.tajuk}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Venue</label><p className="m-0 ml-3" >{_entity?.venue}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tarikh</label><p className="m-0 ml-3" >{Number(_entity?.tarikh)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Pengajur</label><p className="m-0 ml-3" >{_entity?.pengajur}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleNofityPage);
