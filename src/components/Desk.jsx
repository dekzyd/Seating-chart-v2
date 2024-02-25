/* eslint-disable react/prop-types */
import Desk_icon from "./Desk_icon";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Desk = ({ data, style }) => {
  const navigate = useNavigate();
  const { searchedDesk } = useGlobalContext();
  const data_id = data?.id;
  const status = data?.custom_fields["Workspace-Status"]?.value;
  const desk_id = data?.custom_fields["Workspace"]?.value;

  const first_char = desk_id?.charAt(0).toLowerCase();
  return (
    <div
      className="desk mb-[-6px] cursor-pointer hover:font-bold"
      onClick={() => {
        navigate(`/edit/zone_${first_char}s/${data_id}`);
      }}
    >
      {searchedDesk === desk_id ? (
        <Desk_icon status={status} searchedDesk={true} />
      ) : (
        <Desk_icon status={status} />
      )}
      <p
        className={`${style} text-xs font-sans text-slate-500 text-center tracking-wide`}
      >
        {desk_id}
      </p>
    </div>
  );
};

export default Desk;
