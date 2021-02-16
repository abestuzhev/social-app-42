import React from "react";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props)=> {

    if(!props.profile) {
        return <Preloader/>
    }


    return (
        <div className="c-user-info">
            <div className="c-user-info__img">
                {props.profile.photos.small
                  ? <img src={props.profile.photos.small} alt=""/>
                  : <img alt="" src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Wayfarers&hairColor=Red&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Light' />
                  }

                />
            </div>
            <div className="c-user-info__body">
                <div className="c-user-info__title">{props.profile.fullName}</div>
                <div className="c-user-info__properties">
                    <ul>
                        <li>
                            <div className="c-user-info__text">Статус:</div>
                            <div className="c-user-info__text">{props.profile.aboutMe}</div>
                        </li>
                        <li>
                            <div className="c-user-info__text">День рождения:</div>
                            <div className="c-user-info__text">12 ноября 1985</div>
                        </li>
                        <li>
                            <div className="c-user-info__text">Город:</div>
                            <div className="c-user-info__text">Санкт-Петербург</div>
                        </li>
                        <li>
                            <div className="c-user-info__text">Образование:</div>
                            <div className="c-user-info__text">BSU' 11</div>
                        </li>
                        <li>
                            <div className="c-user-info__text">Сайт:</div>
                            <div className="c-user-info__text">google.com</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;