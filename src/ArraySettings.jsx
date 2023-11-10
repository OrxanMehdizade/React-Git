import {useState} from "react";


function ArraySettings({settingsArr,setSettingsArr}){
    let [inputs,setInputs]=useState({inpitID:'',inputName:''
        ,inputUserName:""
        ,inputEmail:""
        ,inputStreet:""
        ,inputSuite:""
        ,inputCity:""
        ,inputZipcode:""
        ,inputLat:""
        ,inputLng:""})

    const handleAddUser=()=>{
        console.log("salam")
        const newUserArr=[...settingsArr];
        const newDataArr= {
            id: inputs.inpitID,
            name: inputs.inputName,
            username: inputs.inputUserName,
            email: inputs.inputEmail,
            street: inputs.inputStreet,
            suite: inputs.inputSuite,
            city: inputs.inputCity,
            zipcode: inputs.inputZipcode,
            lat: inputs.inputLat,
            lng: inputs.inputLng,

        }
        newUserArr.push(newDataArr)
        setSettingsArr(newUserArr)
    }
    return(
        <div id={"myDiv"}>
            <div id={"countrUserId"}>
                {settingsArr.map((item)=>{
                    return(
                        <div id={"userId"}>
                            <h2>Users</h2>
                            <p>{`Index ID: ${item.id}`}</p>
                            <p>{`Name: ${item.name}`}</p>
                            <p>{`UserName: ${item.username}`}</p>
                            <p>{`Email: ${item.email}`}</p>
                            <div id={"addressId"}>
                                <h4>{"Address:"}</h4>
                                <p>{`Street: ${item.address.street}`}</p>
                                <p>{`Suite: ${item.address.suite}`}</p>
                                <p>{`City: ${item.address.city}`}</p>
                                <p>{`Zipcode: ${item.address.zipcode}`}</p>
                                <h4>{"Geo: "}</h4>
                                <p>{`Lat: ${item.address.geo.lat}`}</p>
                                <p>{`Lng: ${item.address.geo.lng}`}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <form action="" id={"settingFormsId"}>
                <h2>Users Settings</h2>
                <input name={"id"} type={"text"} placeholder={"Index ID"}
                       onChange={(event)=>{
                           setInputs({...inputs,inpitID: event.target.value})
                       }} required />
                <input name={"name"} type={"text"} placeholder={"Name"} onChange={(event)=>{
                    setInputs({...inputs,inputName: event.target.value})
                }} />
                <input name={"username"}  type={"text"} placeholder={"UserName"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputUserName: event.target.value})
                       }}/>
                <input name={"email"} type={"email"} placeholder={"E-mail"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputEmail: event.target.value})
                       }}/>
                <h4>{"Address:"}</h4>
                <input name={"street"} type={"text"} placeholder={"Street"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputStreet: event.target.value})
                       }}/>
                <input name={"suite"} type={"text"} placeholder={"Suite"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputSuite: event.target.value})
                       }}/>
                <input name={"city"} type={"text"} placeholder={"City"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputCity: event.target.value})
                       }}/>
                <input name={"zipcode"} type={"text"} placeholder={"Zipcode"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputZipcode: event.target.value})
                       }}/>
                <h4>{"Geo: "}</h4>
                <input name={"lat"} type={"text"} placeholder={"Lat"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputLat: event.target.value})
                       }}/>
                <input name={"lng"} type={"text"} placeholder={"Lng"}
                       onChange={(event)=>{
                           setInputs({...inputs,inputLng: event.target.value})
                       }}/>
                <br></br>
                <button id={"addId"} onClick={handleAddUser}>Add</button>
                <button id={"delId"} >Index Delet</button>
                <button id={"replaceId"}>Index Replace</button>
            </form>

        </div>
    )

}


export default ArraySettings;