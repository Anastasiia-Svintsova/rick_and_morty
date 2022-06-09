import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Image } from 'react-bootstrap';
import './Facebook.scss';

export const Facebook = () => {
  const [login, setLogin] = useState(false);
  // const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const responseFacebook = (response: any) => {
    console.log(response);
    setPicture(response.picture.data.url);
    // setUserId(response.id);
    setName(response.name);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const componentClicked = () => console.log('Clicked');

  return (
    <div>
      {!login && (
        <FacebookLogin
          appId="559344812372273"
          textButton="login"
          // autoLoad
          fields="name,email,picture"
          scope="public_profile,user_friends"
          onClick={componentClicked}
          callback={responseFacebook}
          cssClass="facebook__button"
          icon="fa-facebook"
        />
      )}

      {login && (
        <div className="facebook__user">
          <Image src={picture} roundedCircle className="facebook__user-image" />

          <div>
            <p className="facebook__welcome">Welcome,</p>
            {name}
          </div>
        </div>
      )}
    </div>
  );
};
