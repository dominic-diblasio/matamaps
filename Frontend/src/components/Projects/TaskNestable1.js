import React, { useState } from "react";
import NestableCard from "./NestableCard";
import { Draggable, Droppable } from "react-drag-and-drop";

function TaskNestable1 (props){
    const [dropable,setDropable] = useState([...props.InProgressTaskData]);
    const [gragable,setGragable] = useState([...props.needReviewData]);
    const [Copmplete,setCopmplete] = useState([...props.CompletedData]);

   const onDropT = (data) => {
    var dropabl = dropable;
    var dropablOnly = gragable;
    var dropablComplete = Copmplete;
    dropabl = dropabl.filter(item => item.Data !== data.grag);
    dropablOnly = dropablOnly.filter(item => item.Data === data.grag);
    dropablComplete = dropablComplete.filter(item => item.Data === data.grag);
    
    if(dropablOnly.length > 0)
    {
        dropabl.push(dropablOnly[0]);
    }
    else if(dropablComplete.length>0){
        dropabl.push(dropablComplete[0]);
    }

    const filtereddropable = gragable.filter(
        item => item.Data !== data.grag
    );
    const filteredCopmplete = Copmplete.filter(
        item => item.Data !== data.grag
    );
    setDropable([...dropabl]);
    setGragable([...filtereddropable]);
    setCopmplete([...filteredCopmplete]);

    };
    
   const onDrop = (data) => {
    var dropabl = gragable;
    var dropablOnly = dropable;
    var dropablComplete = Copmplete;
    console.log("Drop",data.grag);
    dropabl = dropabl.filter(item => item.Data !== data.grag);
    dropablOnly = dropablOnly.filter(item => item.Data === data.grag);
    dropablComplete = dropablComplete.filter(item => item.Data === data.grag);
    
    if(dropablOnly.length > 0)
    {
        dropabl.push(dropablOnly[0]);
    }
    else if(dropablComplete.length>0){
        dropabl.push(dropablComplete[0]);
    }
    

    const filteredgragable = dropable.filter(
        item => item.Data !== data.grag
    );
    const filteredCopmplete = Copmplete.filter(
        item => item.Data !== data.grag
    );
        setGragable([...dropabl]);
        setDropable([...filteredgragable]);
        setCopmplete([...filteredCopmplete]);
    };
    
   const onDropCompete = (data) => {
    var Comp = Copmplete;
    var dropablOnly = dropable;
    var dropablComplete = gragable;
    console.log("Complete",data.type);
    Comp = Comp.filter(item => item.Data !== data.fruit);
    dropablOnly = dropablOnly.filter(item => item.Data === data.grag);
    dropablComplete = dropablComplete.filter(item => item.Data === data.grag);
    
    if(dropablOnly.length > 0)
    {
        Comp.push(dropablOnly[0]);
    }
    else if(dropablComplete.length>0){
        Comp.push(dropablComplete[0]);
    }

    const filteredgragable = gragable.filter(
        item => item.Data !== data.fruit
    );
    const filtereddropable = dropable.filter(
        item => item.Data !== data.fruit
    );
    setGragable([...filteredgragable]);
    setDropable([...filtereddropable]);
    setCopmplete( [...Comp]);
    
    };

        return(
            <div className="row taskboard g-3 py-xxl-4">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">In Progress</h6>
                    <Droppable
                        key={"1"}
                        onDragExit={data => {}}
                        onDrop={onDropT.bind(this)}
                        types={["grag"]}
                        className=""
                    >
                        {
                            dropable.map((data,i)=>{
                                return <Draggable
                                        type={data.type}
                                        data={data.Data}
                                        key={"gragglkasej" + i}
                                    >
                                        <NestableCard data={data}/>
                                    </Draggable>
                            })
                        }
                        <div className="p-5">

                        </div>
                    </Droppable>    
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">Needs Review</h6>
                        <Droppable
                            key={"1"}
                            onDragExit={data => {}}
                            onDrop={onDrop.bind(this)}
                            types={["grag"]}
                            className=""
                        >
                            {
                                gragable.map((data,i)=>{
                                    return <Draggable
                                            type={data.type}
                                            data={data.Data}
                                            key={"gragglkasej" + i}
                                        >
                                            <NestableCard data={data}/>
                                        </Draggable>
                                })
                            }
                            <div className="p-5">

                            </div>
                        </Droppable>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">Completed</h6>
                        <Droppable
                                key={"1"}
                                onDragExit={data => {}}
                                onDrop={onDropCompete.bind(this)}
                                types={["grag"]}
                                className=""
                            >
                                {
                                    Copmplete.map((data,i)=>{
                                        return <Draggable
                                                type={data.type}
                                                data={data.Data}
                                                key={"gragglkasej" + i}
                                            >
                                                <NestableCard data={data}/>
                                            </Draggable>
                                    })
                                }
                                <div className="p-5">

                            </div>
                        </Droppable>
                </div>
            </div>
        )
    }


export default TaskNestable1;