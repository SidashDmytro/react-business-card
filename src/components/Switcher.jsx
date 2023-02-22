import React, { useState } from "react";
import Switch from "react-switch";

export default function Switcher(props) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        checked ? props.changeTheme('App light') : props.changeTheme('App dark');
    }

    return (
        <label htmlFor="small-radius-switch">
            <Switch
                checked={checked}
                onChange={handleChange}
                handleDiameter={28}
                offColor="#F5F5F5"
                onColor="#1A1B21"
                offHandleColor="#297FE5"
                onHandleColor="#297FE5"
                height={40}
                width={70}
                borderRadius={6}
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "orange",
                            paddingRight: 2
                        }}
                    >
                        🌚
                    </div>
                }
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 20
                        }}
                    >
                        ☀️
                    </div>
                }
                uncheckedHandleIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 20
                        }}
                    >
                        ☀️
                    </div>
                }
                checkedHandleIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            color: "red",
                            fontSize: 18
                        }}
                    >
                        🌙
                    </div>
                }
                className="react-switch switcher"
                id="small-radius-switch"
            />
        </label>
    );
};