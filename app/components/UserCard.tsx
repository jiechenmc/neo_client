import Image from "next/image";

const UserCard = ({
    userName,
    userHandle,
    userProfilePicture,
}: {
    userName: String;
    userHandle: String;
    userProfilePicture: string;
}) => {
    return (
        <div className="flex items-center w-full h-14 bg-[#00704a] border-t-2 border-b-2 border-[#003825] pl-6">
            <div className="relative aspect-square h-12">
                <Image
                    src={userProfilePicture}
                    alt="user profile picture"
                    layout="fill"
                    style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="flex flex-col ml-3">
                <p className="text-sm font-semibold text-white">{userName}</p>
                <p className="text-sm text-[#8aa8a1] font-light">@{userHandle}</p>
            </div>
        </div>
    );
};

export default UserCard;
