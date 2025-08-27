import { useEffect, useState } from "react";
import { Inputbox } from "./inputbox";
import { Line } from "./Line";
import { Profile } from "./Profile";
import axios from "axios";

export function User() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
            headers: {
                authentication:token // change this if your backend uses `authentication`
            }
        }).then(response => {
            setUsers(response.data.user);
        }).catch(err => {
            console.error(err);
        });
    }, [filter, token]);

    return (
        <div className="mt-6">
            <div className="font-bold text-xl">Users</div>
            <Inputbox 
                onChange={e => setFilter(e.target.value)} 
                placeholder="Search Here" 
                value={filter}
            />
            <div>
                {users.map((user, index) => (
  <Line key={user.username ?? index} label={user} />
))}

            </div>
        </div>
    );
}
