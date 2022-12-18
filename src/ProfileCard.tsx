import './ProfileCard.scss'
import profileImage from './assets/image-victor.jpg'

type Props = {
    name: String,
    age: String,
    city: String,
    img: String,
    statistics: {
        followers: String,
        likes: String,
        photos: String
    },
    children?: JSX.Element | JSX.Element[];
}

function ProfileCard(props: Props) {

    return (<div className={'profile-card'} role="main">

        <div className={'background'}>

            <img className={'profile-picture'} src={profileImage} alt="profile picture"/>

        </div>

        <div className={'info'}>
            <div className='name'>{props.name} <span>{props.age}</span></div>
            <div className='city'>{props.city}</div>
        </div>

        <div className='stats'>
            <div className={'stat-count'}>{props.statistics.followers} <span className={'stat-type'}>Followers</span>
            </div>
            <div className={'stat-count'}>{props.statistics.likes} <span>Likes</span></div>
            <div className={'stat-count'}>{props.statistics.photos} <span>Photos</span></div>
        </div>
    </div>)
}

export default ProfileCard;