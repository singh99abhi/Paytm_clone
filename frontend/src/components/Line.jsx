import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Profile } from "./Profile";

export function Line({ label }) {
  const navigate = useNavigate();

  // If firstName or lastName is missing, skip rendering
  if (!label?.firstName || !label?.lastName || !label.username) return null;

  // Safely get initials
  const add = (label.firstName?.[0] || "") + (label.lastName?.[0] || "");

  return (
    <div className="mt-5 flex justify-between items-center">
      <div className="flex items-center">
        <Profile label={add} />
        <div className="text-xl font-bold p-2">
          {`${label.firstName} ${label.lastName}`}
        </div>
      </div>
      <div>
        <Button
          onclick={() => {
            navigate("/send?id=" + label.username);
          }}
          label={"Send"}
        />
      </div>
    </div>
  );
}
