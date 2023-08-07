const Profile = ({ profile, direction }) => {
    const styles = {
        tooltip: {
            top: 'left-[calc(50%_+_4px)] bottom-14 -translate-x-1/2',
            right: 'top-1/2 left-14 -translate-y-1/2',
        },
        toolArrow: {
            top: 'left-1/2 -bottom-1 -translate-x-1/2',
            right: 'top-1/2 -left-[3px] -translate-y-1/2',
        },
    }

    return (
        <div className='relative group'>
            <div className='w-10 h-10 -mt-2 sm:mt-0 -mr-2 rounded-full border-2 border-solid border-gray-600 cursor-pointer hover:scale-125'>
                <img src={profile.image} alt={profile.name} />
            </div>

            <div
                role='tooltip'
                className={`inline-block absolute min-w-max invisible z-10 py-2 px-4 text-sm bg-gray-700 rounded-full shadow-sm opacity-0 group-hover:visible group-hover:opacity-100 ${styles.tooltip[direction]}`}>
                {profile.name}
                <div
                    className={`absolute w-2 h-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 before:absolute before:w-2 before:h-2 before:bg-gray-700 before:rotate-45 ${styles.toolArrow[direction]}`}></div>
            </div>
        </div>
    )
}

export default Profile
