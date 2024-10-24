import React from 'react';
import Thumbnail1 from "../../assets/images/gallery/1.jpg";
import Thumbnail2 from "../../assets/images/gallery/2.jpg";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";
import Avatar6 from "../../assets/images/xs/avatar6.jpg";
import Avatar7 from "../../assets/images/xs/avatar7.jpg";
import Avatar8 from "../../assets/images/xs/avatar8.jpg";


import lgAvatar1 from "../../assets/images/lg/avatar1.jpg";
import lgAvatar2 from "../../assets/images/lg/avatar2.jpg";
import lgAvatar3 from "../../assets/images/lg/avatar3.jpg";
import lgAvatar4 from "../../assets/images/lg/avatar4.jpg";
import lgAvatar5 from "../../assets/images/lg/avatar5.jpg";

import lgAvatar7 from "../../assets/images/lg/avatar7.jpg";
import lgAvatar8 from "../../assets/images/lg/avatar8.jpg";
import lgAvatar10 from "../../assets/images/lg/avatar10.jpg";
import lgAvatar11 from "../../assets/images/lg/avatar11.jpg";
import lgAvatar12 from "../../assets/images/lg/avatar12.jpg";

export const chatAppData =[
    {
        Name:"Chris Fox",
        image:Avatar1,
        lastSeen:"12:37 PM",
        messages:[
            {
                message:"Hi Aiden, how are you?",
                type:'received',
                images:[],
                time:"10:10 AM, Today"
            },
            {
                message:"How many task are working?",
                type:'send',
                images:[],
                time:"10:10 AM, Today"
            },
            {
                message:"I am working on 10 tasks.5 tasks Completed and 5 inprogress",
                type:'received',
                images:[],
                time:"10:10 AM, Today"
            },
            {
                message:"Why Map job is launched when I run SELECT * FROM tablename;",
                type:'received',
                images:[],
                time:"10:10 AM, Today"
            },
            {
                message:"This behaviour is directed by some of the hive performance tuning settings of the hive.fetch.* family They decide on whether a shortcut to just go at the (table)file in HDFS without any MR/Tez is wanted and/or feasible.",
                type:'send',
                images:[],
                time:"10:10 AM, Today"
            },
            {
                message:"Please find attached images",
                type:'received',
                images:[
                    Thumbnail1,
                    Thumbnail2
                ],
                time:"10:10 AM, Today"
            },
            {
                message:"Okay, will check and let you know.",
                type:'send',
                images:[],
                time:"10:10 AM, Today"
            }
        ]
    },
    {
        Name:"Robert Hammer",
        image:Avatar2,
        lastSeen:"10:45 AM",
        messages:[
            {
                message:"It is a long established fact that a reader will be distracted",
                type:'send',
                images:[],
                time:"10:45 AM, Today"
            }
        ]
    },
    {
        Name:"Orlando Lentz",
        image:Avatar3,
        lastSeen:"10:11 AM",
        messages:[
            {
                message:"There are many variations of passages",
                type:'send',
                images:[],
                time:"10:11 AM, Today"
            }
        ]
    },
    {
        Name:"Barbara Kelly",
        image:Avatar4,
        lastSeen:"sat",
        messages:[
            {
                message:"Contrary to popular belief",
                type:'send',
                images:[],
                time:"send"
            }
        ]
    },
    {
        Name:"Robert Hammer",
        image:Avatar5,
        lastSeen:"sat",
        messages:[
            {
                message:"Please find attached images",
                type:'received',
                images:[
                    Thumbnail1,
                    Thumbnail2
                ],
                time:"sat"
            },
            {
                message:"making it over 2000 years old",
                type:'send',
                images:[],
                time:"sat"
            }
        ]
    },
    {
        Name:"Orlando Lentz",
        image:Avatar6,
        lastSeen:"Fri",
        messages:[
            {
                message:"There are many variations of passages",
                type:'send',
                images:[],
                time:"Fri"
            }
        ]
    },
    {
        Name:"Rose Rivera",
        image:Avatar6,
        lastSeen:"Wed",
        messages:[
            {
                message:"changed an issue from In Progress to",
                type:'send',
                images:[],
                time:"wed"
            }
        ]
    },
    {
        Name:"Chris Fox",
        image:Avatar1,
        lastSeen:"wed",
        messages:[
            {
                message:"Hi Aiden, how are you?",
                type:'received',
                images:[],
                time:"wed"
            },
            {
                message:"Please find attached images",
                type:'received',
                images:[
                    Thumbnail1,
                    Thumbnail2
                ],
                time:"wed"
            },
            {
                message:"Okay, will check and let you know.",
                type:'send',
                images:[],
                time:"wed"
            }
        ]
    },
    {
        Name:"Robert Hammer",
        image:Avatar2,
        lastSeen:"10:45 AM",
        messages:[
            {
                message:"It is a long established fact that a reader will be distracted",
                type:'send',
                images:[],
                time:"10:45 AM, Today"
            }
        ]
    },
    {
        Name:"Orlando Lentz",
        image:Avatar3,
        lastSeen:"wed",
        messages:[
            {
                message:"There are many variations of passages",
                type:'send',
                images:[],
                time:"wed"
            }
        ]
    },
    {
        Name:"Barbara Kelly",
        image:Avatar4,
        lastSeen:"13/10/2020",
        messages:[
            {
                message:"Contrary to popular belief",
                type:'send',
                images:[],
                time:"13/10/2020"
            }
        ]
    },
    {
        Name:"Robert Hammer",
        image:Avatar5,
        lastSeen:"13/10/2020",
        messages:[
            {
                message:"Please find attached images",
                type:'received',
                images:[
                    Thumbnail1,
                    Thumbnail2
                ],
                time:"13/10/2020"
            },
            {
                message:"making it over 2000 years old",
                type:'send',
                images:[],
                time:"13/10/2020"
            }
        ]
    },
    {
        Name:"Orlando Lentz",
        image:Avatar6,
        lastSeen:"13/10/2020",
        messages:[
            {
                message:"There are many variations of passages",
                type:'send',
                images:[],
                time:"13/10/2020"
            }
        ]
    },
    {
        Name:"Rose Rivera",
        image:Avatar6,
        lastSeen:"15/10/2020",
        messages:[
            {
                message:"changed an issue from In Progress to",
                type:'send',
                images:[],
                time:"15/10/2020"
            }
        ]
    },
]

export const TimesheetListData={
    title:"Timesheet List",
    columns:[
        {
            name: "PROJECT NAME",
            selector: ()=>{},
            sortable: true,
            cell:()=><select className="form-select" >
                            <option >Box of Crayons</option>
                            <option value="1">Fast Cad</option>
                            <option value="2">Box of Crayons</option>
                            <option value="3">Gob Geeklords</option>
                            <option value="4">Java Dalia</option>
                            <option value="5">Practice to Perfect</option>
                            <option value="6">Rhinestone</option>
                            <option value="7">Social Geek Made</option>
                        </select>
        },
        {
            name: "MON",
            selector: row=><input type="time" className="form-control" id="timepickerded29" value={row.mon} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "TUE",
            selector: (row)=><input type="time" className="form-control" id="timepickerded29" value={row.tue} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "WED",
            selector: (row)=><input type="time" className="form-control" id="timepickerded29" value={row.wed} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "THUR",
            selector: (row)=><input type="time" className="form-control" id="timepickerded29" value={row.thur} onChange={()=>{}}/>,
            sortable: true,
        },
        {
            name: "FRI",
            selector: (row)=><input type="time" className="form-control" id="timepickerded29" value={row.fri} onChange={()=>{}}/>,
            sortable: true
        },
        {
            name: "SAT",
            selector: (row)=><input type="time" className="form-control" id="timepickerded29" value={row.sat} onChange={()=>{}}/>,
            sortable: true
        },
        {
            name: "TOTAL",
            selector: (row)=>row.total,
            sortable: true,
            cell:row=><button type="button" className="btn light-success-bg">{row.total}</button>
        },
        {
            name: "",
            selector: (row)=>{},
            cell:()=>   <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                            <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                        </div>
        }
    ],
    rows:[
        {
            projectname:"Box of Crayons",
            mon:"08:00:00",
            tue:"08:00:00",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"50"
        },
        {
            projectname:"Fast Cad",
            mon:"08:00:00PM",
            tue:"08:00:00PM",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"48"
        },
        {
            projectname:"Gob Geeklords",
            mon:"08:00:00PM",
            tue:"08:00:00PM",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"56"
        },
        {
            projectname:"Java Dalia",
            mon:"08:00:00PM",
            tue:"08:00:00PM",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"56"
        },
        {
            projectname:"Practice to Perfect",
            mon:"08:00:00PM",
            tue:"08:00:00PM",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"54.2"
        },
        {
            projectname:"",
            mon:"08:00:00PM",
            tue:"08:00:00PM",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"00:00"
        },
        {
            projectname:"",
            mon:"08:00:00PM",
            tue:"08:00:00PM",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"00"
        },
        {
            projectname:"Rhinestone",
            mon:"08:00:00PM",
            tue:"08:00:00PM",
            wed:"08:00:00PM",
            thur:"08:00:00PM",
            fri:"08:00:00PM",
            sat:"08:00:00PM",
            total:"56"
        },
        
    ]
}

export const LeadersListData={
    title:"Leaders List",
    columns:[
        {
            name: "LEADER NAME",
            selector:(row)=>row.leadername,
            sortable: true,
            cell:row=>(
                <div>
                    <img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.leadername}</span>
                </div>
                
            )
            ,
            minWidth:"250px"
        },
        {
            name: "PROJECT",
            selector: (row)=>row.project,
            sortable: true
        },
        {
            name: "TOTAL TASK",
            selector: (row)=>row.totaltask,
            sortable: true
        },
        {
            name: "EMAIL",
            selector: (row)=>row.email,
            sortable: true
        },
        {
            name: "PROJECT ASSIGNED",
            selector: (row)=>row.projectassigned,
            sortable: true
        },
        {
            name: "ASSIGNED STAFF",
            selector: (row)=>{},
            sortable: true,
            cell:(row)=>{
                return <div className="avatar-list avatar-list-stacked px-3">
                            { row.assignedstaff.map((d,i)=> <img key={"fibd"+i} className="avatar rounded-circle sm" src={d} alt="" />)}
                            <span className="avatar rounded-circle text-center pointer sm" ><i className="icofont-ui-add"></i></span>
                        </div>
            }
        },
        {
            name: "STATUS",
            selector: (row)=>{},
            sortable: true,
            cell:row=><span className="badge bg-success">{row.status}</span>
        },
        {
            name: "ACTION",
            selector: (row)=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                        <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                    </div>
        }
        
    ],
    rows:[
        {
            leadername:"Phil Glover",
            image:Avatar1,
            project:"Gob Geeklords",
            totaltask:"2 Task",
            email:"PhilGlover@gmail.com",
            projectassigned:"18/03/21",
            assignedstaff:[Avatar7,Avatar8],
            status:"Working",
        },
        {
            leadername:"Robert Anderson",
            image:Avatar6,
            project:"Rhinestone",
            totaltask:"5 Task",
            email:"RobertAnderson@gmail.com",
            projectassigned:"14/01/21",
            assignedstaff:[Avatar2,Avatar1,Avatar4,Avatar7],
            status:"Working",
        },
        {
            leadername:"Ryan Randall",
            image:Avatar2,
            project:"Fast Cad",
            totaltask:"8 Task",
            email:"RyanRandall@gmail.com",
            projectassigned:"14/01/21",
            assignedstaff:[Avatar2,Avatar1,Avatar7,Avatar8],
            status:"Working",
        },
        {
            leadername:"Ryan Stewart",
            image:Avatar2,
            project:"Social Geek Made",
            totaltask:"15 Task",
            email:"RyanStewart@gmail.com",
            projectassigned:"13/01/21",
            assignedstaff:[Avatar2,Avatar4,Avatar7,Avatar8],
            status:"Working",
        },
        {
            leadername:"Sally Graham",
            image:Avatar5,
            project:"Practice to Perfect",
            totaltask:"9 Task",
            email:"SallyGraham@gmail.com",
            projectassigned:"13/01/21",
            assignedstaff:[Avatar2,Avatar1,Avatar3,Avatar4],
            status:"Working",
        },
        {
            leadername:"Victor Rampling",
            image:Avatar4,
            project:"Practice to Perfect",
            totaltask:"7 Task",
            email:"VictorRampling@gmail.com",
            projectassigned:"18/06/21",
            assignedstaff:[Avatar2,Avatar4,Avatar7,Avatar8],
            status:"Working",
        },
        {
            leadername:"Joan Dyer",
            image:Avatar1,
            project:"Box of Crayons",
            totaltask:"5 Task",
            email:"joandyer@gmail.com",
            projectassigned:"23/02/21",
            assignedstaff:[Avatar2,Avatar7,Avatar8],
            status:"Working",
        }
    ]
}

export const TicketsViewData={
    title:"Tickets List",
    columns:[
        {
            name: "TICKET ID",
            selector: (row)=>row.ticketid,
            sortable: true,
            cell:(row)=> <a href="tickets-detail" className="fw-bold text-secondary">{row.ticketid}</a>
        },
        {
            name: "SUBJECT",
            selector: (row)=>row.subject,
            sortable: true
        },
        {
            name: "ASSIGNED",
            selector: (row)=>row.assigned,
            sortable: true,
            cell:row=><div><img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.assigned}</span></div>,
            minWidth:"250px"
        },
        {
            name: "CREATD DATE",
            selector: (row)=>row.createdate,
            sortable: true
        },
        {
            name: "STATUS",
            selector: (row)=>{},
            sortable: true,
            cell:row=><span className={`badge ${row.status==="Completed"?'bg-success':"bg-warning"}`}>{row.status}</span>
        },
        {
            name: "ACTION",
            selector: (row)=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                        <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                    </div>
        }

    ],
    rows:[
        {
            ticketid:"#Tc-00011",
            image:Avatar4,
            subject:"punching time not proper",
            assigned:"Victore Rampling",
            createdate:"25-02-2021",
            status:"Completed"
        },
        {
            ticketid:"#Tc-0002",
            image:Avatar1,
            subject:"Internet Not Working",
            assigned:"Joan Dyer",
            createdate:"21-03-2021",
            status:"In Progress"
        },
        {
            ticketid:"#Tc-00021",
            image:Avatar5,
            subject:"Internet Not Working",
            assigned:"Sally Grahanm",
            createdate:"16-02-2021",
            status:"Completed"
        },
        {
            ticketid:"#Tc-0004",
            image:Avatar3,
            subject:"Internet Not Working",
            assigned:"Phil Glover",
            createdate:"16-03-2021",
            status:"In Progress"
        },
        {
            ticketid:"#Tc-00041",
            image:Avatar6,
            subject:"Internet Not Working",
            assigned:"Robert Anderson",
            createdate:"18-01-2021",
            status:"Completed"
        },
        {
            ticketid:"#Tc-0006",
            image:Avatar2,
            subject:"Internet Not Working",
            assigned:"Ryan Randall",
            createdate:"12-03-2021",
            status:"In Progress"
        }
    ]
}

export const BugImageAttechedData=[
    {
        filename:"Image3.jpg",
        fileicon:"icofont-bug fs-5",
        bgClass:'light-danger-bg'
    },
    {
        filename:"Image3.jpg",
        fileicon:"icofont-bug fs-5",
        bgClass:'light-danger-bg'
    },
    {
        filename:"Image3.jpg",
        fileicon:"icofont-bug fs-5",
        bgClass:'light-danger-bg'
    },
    {
        filename:"Image3.jpg",
        fileicon:"icofont-bug fs-5",
        bgClass:'light-danger-bg'
    },
    {
        filename:"Image3.jpg",
        fileicon:"icofont-bug fs-5",
        bgClass:'light-danger-bg'
    }
]

export const BugFileAttechedData=[
    {
        filename:"file1.pdf",
        fileicon:"icofont-file-pdf fs-5",
        bgClass:'bg-lightgreen'
    },
    {
        filename:"file1.pdf",
        fileicon:"icofont-file-pdf fs-5",
        bgClass:'bg-lightgreen'
    },
    {
        filename:"file1.pdf",
        fileicon:"icofont-file-pdf fs-5",
        bgClass:'bg-lightgreen'
    },
    {
        filename:"file1.pdf",
        fileicon:"icofont-file-pdf fs-5",
        bgClass:'bg-lightgreen'
    },
    {
        filename:"file1.pdf",
        fileicon:"icofont-file-pdf fs-5",
        bgClass:'bg-lightgreen'
    }
]

export const OurClientsData=[
    {
        avatar:lgAvatar3,
        post:"CEO",
        name:"Ryan Ogden",
        Companyname:"AgilSoft Tech"
    },
    {
        avatar:lgAvatar2,
        post:"Manager",
        name:"Matt Gibson",
        Companyname:"Macrosoft"
    },
    {
        avatar:lgAvatar2,
        post:"CEO",
        name:"Lauren Reid",
        Companyname:"Google"
    },
    {
        avatar:lgAvatar10,
        post:"CEO",
        name:"Lauren Reid",
        Companyname:"Google"
    },
    {
        avatar:lgAvatar11,
        post:"Manager",
        name:"Lauren Reid",
        Companyname:"Deltasoft Tech"
    },
    {
        avatar:lgAvatar12,
        post:"CEO",
        name:"Paul Grant",
        Companyname:"Design Tech"
    },
    {
        avatar:lgAvatar11,
        post:"Manager",
        name:"Lauren Reid",
        Companyname:"Deltasoft Tech"
    },
    {
        avatar:lgAvatar12,
        post:"CEO",
        name:"Paul Grant",
        Companyname:"Design Tech"
    },
    {
        avatar:lgAvatar7,
        post:"Manager",
        name:"Lauren Reid",
        Companyname:"Deltasoft Tech"
    },
    {
        avatar:lgAvatar7,
        post:"CEO",
        name:"Paul Grant",
        Companyname:"Design Tech"
    }
]

export const clentProfileData=[
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar4,Avatar8],
        logo:"icofont-paint",
        logoBg:"light-info-bg",
        title:"UI/UX Design",
        sl:"Social Geek Made"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar4],
        logo:"icofont-vector-path",
        logoBg:"bg-lightgreen",
        title:"Website Design",
        sl:"Practice to Perfect"
    }
]

export const MembersData=[
    {
        avatar:lgAvatar3,
        post:"",
        name:"UI/UX Designer",
        Companyname:"Luke Short"
    },
    {
        avatar:lgAvatar2,
        post:"",
        name:"Quality Assurance",
        Companyname:"Lillian Powell"
    },
    {
        avatar:lgAvatar2,
        post:"",
        name:"Website Designer",
        Companyname:"Rachel Parsons"
    },
    {
        avatar:lgAvatar10,
        post:"",
        name:"Developer",
        Companyname:"John Hardacre"
    },
    {
        avatar:lgAvatar11,
        post:"",
        name:"QA/QC Engineer",
        Companyname:"Jan Ince"
    },
    {
        avatar:lgAvatar12,
        post:"",
        name:"Mobile developer",
        Companyname:"Steven Butler"
    },
    {
        avatar:lgAvatar11,
        post:"",
        name:"UI/UX Designer",
        Companyname:"Robert Hammer"
    },
    {
        avatar:lgAvatar12,
        post:"",
        name:"Quality Assurance",
        Companyname:"Paul Slater"
    },
    {
        avatar:lgAvatar7,
        post:"",
        name:"Website Designer",
        Companyname:"Rachel Parsons"
    },
    {
        avatar:lgAvatar7,
        post:"",
        name:"Website Designer",
        Companyname:"Rachel Parsons"
    }
]

export const employeeProfileData=[
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar4,Avatar8],
        logo:"icofont-paint",
        logoBg:"light-info-bg",
        title:"UI/UX Design",
        sl:"Social Geek Made"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar4],
        logo:"icofont-vector-path",
        logoBg:"bg-lightgreen",
        title:"Website Design",
        sl:"Practice to Perfect"
    }
]

export const employeeInformationDetails = [
    {
        title:"Personal Informations",
        information:[
            {
                title:"Nationality",
                value:"Indian"
            },
            {
                title:"Religion",
                value:"Hindu"
            },
            {
                title:"Marital Status",
                value:"Married"
            },
            {
                title:"Passport No.",
                value:"5468953210"
            },
            {
                title:"Emergency Contact",
                value:"7468953210"
            }
        ]
    },
    {
        title:"Bank Informations",
        information:[
            {
                title:"Bank Name",
                value:"Kotak"
            },
            {
                title:"Account No.",
                value:"5436874596325486"
            },
            {
                title:"IFSC Code",
                value:"Kotak000021"
            },
            {
                title:"Pan No",
                value:"ACQPF6584L"
            },
            {
                title:"UPI Id",
                value:"454812kotak@upi"
            }
        ]
    }
]

export const HolidaysData={
    title:"Holidays List",
    columns:[
        {
            name: "#",
            selector: row=><span className={row.txtClass}>{row.ticketid}</span>,
            sortable: true
        },
        {
            name: "HOLIDAY DAY",
            selector: row=><span className={row.txtClass}>{row.Holidayday}</span>,
            sortable: true
        },
        {
            name: "HOLIDAY DATE",
            selector: row=><span className={row.txtClass}>{row.holidaydate}</span>,
            sortable: true
        },
        {
            name: "HOLIDAY NAME",
            selector: row=><span className={row.txtClass}>{row.holidayname}</span>,
            sortable: true
        },
        {
            name: "ACTION",
            selector: ()=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary"><i className="icofont-edit text-success"></i></button>
                        <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                    </div>
        }

    ],
    rows:[
        {
            ticketid:"01",
            Holidayday:"Tuesday",
            holidaydate:"January 26, 2021",
            holidayname:"Republic Day",
            txtClass:'text-danger'
        },
        {
            ticketid:"02",
            Holidayday:"Friday",
            holidaydate:"April 2, 2021",
            holidayname:"Good Friday",
            txtClass:'text-danger'
        },
        {
            ticketid:"03",
            Holidayday:"Monday",
            holidaydate:"April 30, 2021",
            holidayname:"Memorial Day",
            txtClass:'text-danger'
        },
        {
            ticketid:"04",
            Holidayday:"Wednesday",
            holidaydate:"August 15, 2021",
            holidayname:"Independence Day",
            txtClass:'text-success'
        },
        {
            ticketid:"05",
            Holidayday:"Wednesday",
            holidaydate:"August 22, 2021",
            holidayname:"Bakrid"
        },
        {
            ticketid:"06",
            Holidayday:"Monday",
            holidaydate:"September 30, 2021",
            holidayname:"Janmashtami"
        },
        {
            ticketid:"07",
            Holidayday:"Tuesday",
            holidaydate:"Octomber 2, 2021",
            holidayname:"Gandhi Jayanti"
        },
        {
            ticketid:"08",
            Holidayday:"Wednesday",
            holidaydate:"November 7, 2021",
            holidayname:"Diwali"
        },
        {
            ticketid:"09",
            Holidayday:"Tuesday	",
            holidaydate:"December 25, 2021",
            holidayname:"Christmas Day"
        }
    ]
}

export const LeaveRequestData={
    title:"Leave Request",
    columns:[
        {
            name: "EMPLOYEE ID",
            selector: row=>row.employeeId,
            sortable: true,
            cell:row=><a href="members-profile" className="fw-bold text-secondary">{row.employeeId}</a>
        },
        {
            name: "EMPLOYEE NAME",
            selector: row=>{},
            sortable: true,
            cell:row=><div> <img className="avatar rounded-circle" src={row.image} alt=""></img> 
                        <span className="fw-bold ms-1">{row.employeeName}</span>
                    </div>
        },
        {
            name: "LEAVE TYPE",
            selector: row=>row.leavetype,
            sortable: true
        },
        {
            name: "FROM",
            selector: row=>row.from,
            sortable: true
        },
        {
            name: "TO",
            selector: row=>row.to,
            sortable: true
        },
        {
            name: "REASON",
            selector: row=>row.reason,
            sortable: true
        },
        {
            name: "ACTION",
            selector: row=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary" ><i className="icofont-check-circled text-success"></i></button>
                        <button type="button" className="btn btn-outline-secondary deleterow" ><i className="icofont-close-circled text-danger"></i></button>
                    </div>
        }

    ],
    rows:[
        {
            employeeId:"#EMP : 00001",
            employeeName:"Joan Dyer",
            image:Avatar1,
            leavetype:"Casual Leave",
            from:"12/03/2021",
            to:"14/03/2021",
            reason:"Going to Holiday"
        },
        {
            employeeId:"#EMP : 00002",
            employeeName:"Sally Graham",
            image:Avatar5,
            leavetype:"Medical Leave",
            from:"01/05/2021",
            to:"06/05/2021",
            reason:"Hospital Admit"
        },
        {
            employeeId:"#EMP : 00005",
            employeeName:"Robert Anderson",
            image:Avatar6,
            leavetype:"Medical Leave",
            from:"03/05/2021",
            to:"06/05/2021",
            reason:"Hospital Admit"
        },
        {
            employeeId:"#EMP : 00007",
            employeeName:"Phil Glover",
            image:Avatar3,
            leavetype:"Medical Leave",
            from:"11/04/2021",
            to:"12/04/2021",
            reason:"Going to Hospital"
        },
        {
            employeeId:"#EMP : 000010",
            employeeName:"Victor Rampling",
            image:Avatar4,
            leavetype:"Medical Leave",
            from:"28/04/2021",
            to:"30/04/2021",
            reason:"Going to Hospital"
        },
        {
            employeeId:"#EMP : 000014",
            employeeName:"Ryan Stewart",
            image:Avatar7,
            leavetype:"Casual Leave",
            from:"10/07/2021",
            to:"18/08/2021",
            reason:"Famaily Holiday"
        },
        {
            employeeId:"#EMP : 000038",
            employeeName:"Ryan Randall",
            image:Avatar2,
            leavetype:"Casual Leave",
            from:"10/04/2021",
            to:"12/04/2021",
            reason:"Going to Holiday"
        }
        
    ]
}

export const DepartmentsData = {
    title:"Departments",
    columns:[
        {
            name: "#",
            selector: (row)=>row.employeeId,
            sortable: true,
            // cell:row=><a href="#!" className="fw-bold text-secondary">{row.employeeId}</a>
        },
        {
            name: "DEPARTMENT HEAD",
            selector: (row)=>row.DepartmentHead,
            sortable: true,
            cell:row=><div> <img className="avatar rounded-circle" src={row.image} alt=""></img> 
                        <span className="fw-bold ms-1">{row.DepartmentHead}</span>
                    </div>
        },
        {
            name: "DEPARTMENT NAME",
            selector: (row)=>row.DepartmentName,
            sortable: true
        },
        {
            name: "EMPLOYEE UNDER WORK",
            selector: (row)=>row.employeeNo,
            sortable: true
        },
        {
            name: "ACTION",
            selector: (row)=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></button>
                        <button className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                    </div>
        }

    ],
    rows:[
        {
            employeeId:"1",
            DepartmentHead:"Joan Dyer",
            image:Avatar1,
            DepartmentName:"Web Development",
            employeeNo:40
            
        },
        {
            employeeId:"2",
            DepartmentHead:"Sally Graham",
            image:Avatar5,
            DepartmentName:"Accounts",
            employeeNo:48
            
        },
        {
            employeeId:"3",
            DepartmentHead:"Robert Anderson",
            image:Avatar6,
            DepartmentName:"Support",
            employeeNo:15
        },
        {
            employeeId:"4",
            DepartmentHead:"Phil Glover",
            image:Avatar3,
            DepartmentName:"App Development",
            employeeNo:39
            
        },
        {
            employeeId:"5",
            DepartmentHead:"Victor Rampling",
            image:Avatar4,
            DepartmentName:"Recruiter",
            employeeNo:12
            
        },
        {
            employeeId:"6",
            DepartmentHead:"Ryan Stewart",
            image:Avatar7,
            DepartmentName:"Admin",
            employeeNo:8
        }
        
    ]
}

export const PaymentsData = {
    title:"Payments",
    columns:[
        {
            name: "NO",
            selector: row=><a href="invoices" className="fw-bold text-secondary">{row.no}</a>,
            sortable: true,
        },
        {
            name: "PROJECT",
            selector: row=>row.project,
            sortable: true,
        },
        {
            name: "CLIENT NAME",
            selector: row=>row.clientName,
            sortable: true
        },
        {
            name: "DATE START",
            selector: row=>row.dateStart,
            sortable: true
        },
        {
            name: "DATE END",
            selector: row=>row.dateEnd,
            sortable: true
        },
        {
            name: "AMOUNT",
            selector: row=>row.amount,
            sortable: true
        },
        {
            name: "STATUS",
            selector: ()=>{},
            sortable: true,
            cell:(row)=><span className={`badge ${row.status === "Paid"?"bg-success":row.status === "Draf"?'bg-lavender-purple':'bg-warning'}`}>{row.status}</span>
        }

    ],
    rows:[
        {
            no:"#00001",
            project:"Social Geek Made",
            clientName:"AgilSoft Tech",
            dateStart:"10-01-2021",
            dateEnd:'10-02-2021',
            amount:"$3250",
            status:"Pending"
        },
        {
            no:"#00002",
            project:"Practice to Perfect",
            clientName:"Microsoft",
            dateStart:"12-02-2021",
            dateEnd:'10-04-2021',
            amount:"$1578",
            status:"Paid"
        },
        {
            no:"#00003",
            project:"Rhinestone",
            clientName:"Google",
            dateStart:"18-02-2021",
            dateEnd:'20-04-2021',
            amount:"$1978",
            status:"Draf"
        },
        {
            no:"#00004",
            project:"Box of Crayons",
            clientName:"Pixelwibes",
            dateStart:"28-02-2021",
            dateEnd:'30-04-2021',
            amount:"$1978",
            status:"Draf"
        },
        {
            no:"#00005",
            project:"Practice to Perfect",
            clientName:"Deltasoft Tech",
            dateStart:"11-02-2021",
            dateEnd:'10-04-2021',
            amount:"$1578",
            status:"Paid"
        },
        {
            no:"#00006",
            project:"Rhinestone",
            clientName:"Google",
            dateStart:"17-02-2021",
            dateEnd:'20-04-2021',
            amount:"$1978",
            status:"Draf"
        },
        {
            no:"#00007",
            project:"Box of Crayons",
            clientName:"Pixelwibes",
            dateStart:"14-02-2021",
            dateEnd:'30-04-2021',
            amount:"$1978",
            status:"Draf"
        }
        
    ]
}

export const ExpensesData ={
    title:"Expenses",
    columns:[
        {
            name: "EXP ID",
            selector: row=>row.expId,
            sortable: true,
        },
        {
            name: "ITEM",
            selector: row=>row.item,
            sortable: true,
        },
        {
            name: "ORDER BY",
            selector: ()=>{},
            sortable: true,
            cell:row=><div> <img className="avatar rounded-circle" src={row.image} alt=""></img> 
                        <span className="fw-bold ms-1">{row.orderby}</span>
                    </div>
        },
        {
            name: "DATE",
            selector: row=>row.date,
            sortable: true
        },
        {
            name: "FROM",
            selector: row=>row.from,
            sortable: true
        },
        {
            name: "STATUS",
            selector: ()=>{},
            sortable: true,
            cell:(row)=><span className={`badge ${row.status === "Completed"?"bg-success":row.status === "Draf"?'bg-lavender-purple':'bg-warning'}`}>{row.status}</span>
        },
        {
            name: "ACTION",
            selector: ()=>{},
            sortable: true,
            cell:()=><div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#expedit"><i className="icofont-edit text-success"></i></button>
                            <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                        </div>
        }

    ],
    rows:[
        {
            expId:"#EX-00002",
            item:"Internet Payment",
            orderby:"Joan Dyer",
            image:Avatar1,
            date:"12/03/2021",
            from:'Airtel Portal',
            status:"In Progress",
        },
        {
            expId:"#EX-00004",
            item:"Printer Repairing",
            orderby:"Phil Glover",
            image:Avatar3,
            date:"16/03/2021",
            from:'JustDial',
            status:"In Progress",
        },
        {
            expId:"#EX-00006",
            item:"Keybord Order",
            orderby:"Ryan Randall",
            image:Avatar2,
            date:"12/03/2021",
            from:'Flipkart',
            status:"In Progress",
        },
        {
            expId:"#EX-00011",
            item:"Pen/book Order",
            orderby:"Victor Ramplingl",
            image:Avatar4,
            date:"25/02/2021",
            from:'Flipkart',
            status:"Completed",
        },
        {
            expId:"#EX-00014",
            item:"Decoration Order",
            orderby:"Robert Anderson",
            image:Avatar3,
            date:"18/02/2021",
            from:'Flipkart',
            status:"Completed",
        },
        {
            expId:"#EX-00018",
            item:"Food Order",
            orderby:"Sally Graham",
            image:Avatar5,
            date:"16/02/2021",
            from:'Swiggy',
            status:"Completed",
        }
    ]
}

export const ProjectCardData=[
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar4,Avatar8],
        logo:"icofont-paint",
        logoBg:"light-info-bg",
        title:"UI/UX Design",
        sl:"Social Geek Made"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar4],
        logo:"icofont-vector-path",
        logoBg:"bg-lightgreen",
        title:"Website Design",
        sl:"Practice to Perfect"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar8,lgAvatar5,lgAvatar5,lgAvatar7],
        logo:"icofont-ui-touch-phone",
        logoBg:"bg-lightyellow",
        title:"App Development",
        sl:"Java Dalia"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3],
        logo:"icofont-tick-boxed",
        logoBg:"light-success-bg",
        title:"Quality Assurance",
        sl:"Switch and Swif"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar8,lgAvatar5,lgAvatar5,lgAvatar7],
        logo:"icofont-dashboard-web",
        logoBg:"light-orange-bg",
        title:"Development",
        sl:"Gob Geeklords"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar8,lgAvatar5,lgAvatar5,lgAvatar7],
        logo:"icofont-tasks",
        logoBg:"bg-lightblue",
        title:"Software Testing",
        sl:"Fast Cad"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar8],
        logo:"icofont-vector-path",
        logoBg:"bg-lightgreen",
        title:"Website Design",
        sl:"Hex Clan"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3],
        logo:"icofont-tick-boxed",
        logoBg:"light-success-bg",
        title:"Quality Assurance",
        sl:"Switch and Swif"
    },
    {
        teamImage:[lgAvatar1,lgAvatar3,lgAvatar1,lgAvatar3,lgAvatar4,lgAvatar8,lgAvatar5,lgAvatar5,lgAvatar7],
        logo:"icofont-dashboard-web",
        logoBg:"light-orange-bg",
        title:"Development",
        sl:"Gob Geeklords"
    },
]

export const InProgressTaskData=[
    {
        id: 1,
        images:[Avatar2,Avatar1],
        Data:"MEDI1UM",
        status:"MEDIUM",
        title:"Quality Assurance",
        titleBGClass:"light-success-bg",
        date:"28 Mar",
        message:5,
        attachment:5,
        ticketInfo:"Box of Crayons",
        type:"grag"
    },
    {
        id: 2,
        images:[Avatar2],
        Data:"LOW2",
        status:"LOW",
        title:"Website Design",
        titleBGClass:"bg-lightgreen",
        date:"12 Feb",
        message:3,
        attachment:4,
        ticketInfo:"Practice to Perfect",
        type:"grag"
    },
    {
        id: 3,
        images:[Avatar3,Avatar1],
        Data:"MEDI3UM",
        status:"MEDIUM",
        title:"UI/UX Design",
        titleBGClass:"light-info-bg",
        date:"03 Apr",
        message:7,
        attachment:1,
        ticketInfo:"Social Geek Made",
        type:"grag"
    },
    {
        id: 4,
        images:[Avatar5,Avatar1],
        Data:"MEDI4UM",
        status:"MEDIUM",
        title:"UI/UX Design",
        titleBGClass:"light-info-bg",
        date:"03 Apr",
        message:7,
        attachment:1,
        ticketInfo:"Social Geek Made",
        type:"grag"
    },
    {
        id: 5,
        images:[Avatar4],
        Data:"High5",
        status:"High",
        title:"Quality Ansurance",
        titleBGClass:"light-info-bg",
        date:"25 Mar",
        message:8,
        attachment:6,
        ticketInfo:"Box of Crayons",
        type:"grag"
    }
]

export const needReviewData=[
  
    {
        id: 1,
        images:[Avatar3,Avatar1],
        Data:"MEDIUM1need",
        status:"MEDIUM",
        title:"UI/UX Design",
        titleBGClass:"light-info-bg",
        date:"03 Apr",
        message:7,
        attachment:1,
        ticketInfo:"Social Geek Made",
        type:"grag"
    },
    {
        id: 2,
        images:[Avatar5,Avatar1],
        Data:"MEDIUM2need",
        status:"MEDIUM",
        title:"UI/UX Design",
        titleBGClass:"light-info-bg",
        date:"03 Apr",
        message:7,
        attachment:1,
        ticketInfo:"Social Geek Made",
        type:"grag"
    },
    {
        id: 3,
        images:[Avatar2,Avatar1],
        Data:"MEDIUM3need",
        status:"MEDIUM",
        title:"Quality Assurance",
        titleBGClass:"light-success-bg",
        date:"28 Mar",
        message:5,
        attachment:5,
        ticketInfo:"Box of Crayons",
        type:"grag"
    },
    {
        id: 4,
        images:[Avatar4],
        Data:"High4need",
        status:"High",
        title:"Quality Ansurance",
        titleBGClass:"light-info-bg",
        date:"25 Mar",
        message:8,
        attachment:6,
        ticketInfo:"Box of Crayons",
        type:"grag"
    }
]

export const CompletedData=[
  
    {
        id: 1,
        images:[Avatar3,Avatar1],
        Data:"MEDIUM1Complete",
        status:"MEDIUM",
        title:"UI/UX Design",
        titleBGClass:"light-info-bg",
        date:"03 Apr",
        message:7,
        attachment:1,
        ticketInfo:"Social Geek Made",
        type:"grag"
    },
    {
        id: 2,
        images:[Avatar5,Avatar1],
        Data:"MEDIUM2Complete",
        status:"MEDIUM",
        title:"UI/UX Design",
        titleBGClass:"light-info-bg",
        date:"03 Apr",
        message:7,
        attachment:1,
        ticketInfo:"Social Geek Made",
        type:"grag"
    },
    {
        id: 3,
        images:[Avatar2,Avatar1],
        Data:"MEDIUM3Complete",
        status:"MEDIUM",
        title:"Quality Assurance",
        titleBGClass:"light-success-bg",
        date:"28 Mar",
        message:5,
        attachment:5,
        ticketInfo:"Box of Crayons",
        type:"grag"
    },
    {
        id: 4,
        images:[Avatar4],
        Data:"High4Complete",
        status:"High",
        title:"Quality Ansurance",
        titleBGClass:"light-info-bg",
        date:"25 Mar",
        message:8,
        attachment:6,
        ticketInfo:"Box of Crayons",
        type:"grag"
    },
    {
        id: 5,
        images:[Avatar4],
        Data:"High5Complete",
        status:"High",
        title:"Quality Ansurance",
        titleBGClass:"light-info-bg",
        date:"25 Mar",
        message:8,
        attachment:6,
        ticketInfo:"Box of Crayons",
        type:"grag"
    }
]

export const TimeAttandanceData={
    title:"",
    columns:[
        {
            name: "#",
            selector: row=>row.no,
            sortable: true
        },
        {
            name: "DATE",
            selector: row=>row.date,
            sortable: true,
        },
        {
            name: "PUNCHIN TIME",
            selector: (row)=>row.punchinTime,
            sortable: true,
        },
        {
            name: "PUNCHOU TIME",
            selector: (row)=><span className="text-danger">{row.punchoutTime}</span>,
            sortable: true,
        },
        {
            name: "BREACK TIME",
            selector: (row)=><span className="text-danger">{row.breackTime}</span>,
            sortable: true,
        },
        {
            name: "HALF DAY",
            selector: (row)=><i className={`icofont-close-circled ${row.halfDay?'text-success':'text-danger'}`}></i>,
            sortable: true
        },
        {
            name: "FULL DAY",
            selector: (row)=><i className={`icofont-close-circled ${row.fullDay?'text-success':'text-danger'}`}></i>,
            sortable: true
        },
        {
            name: "OVERTIME",
            selector: (row)=><span className="text-success">{row.overTime}</span>,
            sortable: true,
        },
        {
            name: "TOTAL PRODUCTION",
            selector: (row)=>row.total
        }
    ],
    rows:[
        {
            no:"01",
            date:"June 26, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:39 Hr",
            total:"09:39 Hr"
        },
        {
            no:"02",
            date:"June 25, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:39 Hr",
            total:"09:39 Hr"
        },
        {
            no:"03",
            date:"June 24, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"02:00 PM",
            breackTime:"00:00",
            halfDay:true,
            fullDay:false,
            overTime:"00:00",
            total:"04:00 Hr"
        },
        {
            no:"04",
            date:"June 23, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"03:05 PM",
            breackTime:"00:00",
            halfDay:true,
            fullDay:false,
            overTime:"00:00",
            total:"05:00 Hr"
        },
        {
            no:"05",
            date:"June 22, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:00 Hr",
            total:"09:00 Hr"
        },
        {
            no:"06",
            date:"June 21, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:00 Hr",
            total:"09:00 Hr"
        },
        {
            no:"07",
            date:"June 18, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:00 Hr",
            total:"09:00 Hr"
        },
        {
            no:"08",
            date:"June 17, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:00 Hr",
            total:"09:00 Hr"
        },
        {
            no:"09",
            date:"June 16, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:00 Hr",
            total:"09:00 Hr"
        },
        {
            no:"10",
            date:"June 15, 2021",
            punchinTime:"10:05 AM",
            punchoutTime:"09:05 PM",
            breackTime:"01:12 Hr",
            halfDay:false,
            fullDay:true,
            overTime:"01:00 Hr",
            total:"09:00 Hr"
        }

    ]
}