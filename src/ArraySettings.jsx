import React, { useState } from "react";

function ArraySettings({ settingsArr, setSettingsArr }) {
    const [userArr, setUserArr] = useState({
        id: "",
        name: "",
        username: "",
        email: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserArr({ ...userArr, [name]: value });
    };

    const handleAddUser = () => {
        setSettingsArr([...settingsArr, userArr]);
        setUserArr({ id: "", name: "", username: "", email: "" });
    };

    const handleDeleteUser = (id) => {
        const updatedSettings = settingsArr.filter((item) => item.id !== id);
        setSettingsArr(updatedSettings);
    };

    const handleReplaceUser = (id) => {
        const userIndex = settingsArr.findIndex((item) => item.id === id);

        if (userIndex !== -1) {
            const updatedSettings = [...settingsArr];
            updatedSettings[userIndex] = userArr;
            setSettingsArr(updatedSettings);
            setUserArr({ id: "", name: "", username: "", email: "" });
        } else {
            console.error("User not found");
        }
    };

    return (
        <div id={"myDiv"}>
            <div id={"countrUserId"}>
                {settingsArr.map((item, index) => (
                    <div id={"userId"} key={index}>
                        <h2>Users</h2>
                        <p>{`Index ID: ${item.id}`}</p>
                        <p>{`Name: ${item.name}`}</p>
                        <p>{`UserName: ${item.username}`}</p>
                        <p>{`Email: ${item.email}`}</p>
                        <button id={"delId"} onClick={() => handleDeleteUser(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <form action="" id={"settingFormsId"}>
                <h2>Users Settings</h2>
                <input
                    name={"id"}
                    type={"text"}
                    placeholder={"Index ID"}
                    value={userArr.id}
                    onChange={handleInputChange}
                />
                <input
                    name={"name"}
                    type={"text"}
                    placeholder={"Name"}
                    value={userArr.name}
                    onChange={handleInputChange}
                />
                <input
                    name={"username"}
                    type={"text"}
                    placeholder={"UserName"}
                    value={userArr.username}
                    onChange={handleInputChange}
                />
                <input
                    name={"email"}
                    type={"email"}
                    placeholder={"E-mail"}
                    value={userArr.email}
                    onChange={handleInputChange}
                />
                <br />
                <button id={"addId"} type="button" onClick={handleAddUser}>
                    Add
                </button>
                <button id={"delId"} type="button" onClick={() => handleDeleteUser(parseInt(userArr.id, 10))}>
                    Index Delete
                </button>
                <button id={"replaceId"} type="button" onClick={() => handleReplaceUser(parseInt(userArr.id, 10))}>
                    Index Replace
                </button>

            </form>
        </div>
    );
}

export default ArraySettings;
