import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Image } from 'react-bootstrap';
import { useLocalStorage } from '../../Hooks/UseLocalStorage';

import './Facebook.scss';

export const Facebook = () => {
  const [login, setLogin] = useLocalStorage('isLogin', false);
  const [name, setName] = useLocalStorage('userName', '');
  const [picture, setPicture] = useLocalStorage('userPicture', '');

  const responseFacebook = (response: any) => {
    setPicture(response.picture.data.url);
    setName(response.name);

    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div>
      {!login && (
        <FacebookLogin
          appId="559344812372273"
          textButton="login"
          fields="name,email,picture"
          scope="public_profile,user_friends"
          callback={responseFacebook}
          cssClass="facebook__button"
          icon="fa-facebook"
        />
      )}

      {login && (
        <div className="facebook__user">
          <Image
            src={picture}
            roundedCircle
            className="facebook__user-image"
          />

          <div>
            <p className="facebook__welcome">Welcome,</p>

            {name.split(' ')[0]}
          </div>
        </div>
      )}
    </div>
  );
};
