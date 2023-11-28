import Avatar from "react-avatar";
import { CastAndCrew } from "../../Types";
import Uimage from "../../assets/unknownimage.png";
import { getImageURL } from "../../utils";

type ProfileCardProps = {
  people: CastAndCrew;
};

const ProfileCard = ({ people }: ProfileCardProps) => {
  let profileImage: string = Uimage;

  if (people.profile_path != null) {
    profileImage = getImageURL(people.profile_path, "/w185");
  }

  return (
    <div className="mr-8 flex flex-col justify-center items-center font-lora text-sm">
      <Avatar
        name={people.original_name}
        alt={`Image of ${people.original_name}`}
        src={profileImage}
        round
        size="90px"
      />
      <span className="text-base tracking-wide">{people.original_name}</span>
      <span className="text-gray-400 font-light">
        {people?.character == null ? people.job : people.character}
      </span>
    </div>
  );
};
export default ProfileCard;
