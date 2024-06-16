import React, { useEffect, useState } from "react";

function useProfile() {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const userSession = JSON.parse(sessionStorage.getItem("user"));
  const [profile, setProfile] = useState({});

  const configuration = () => {
    if (userLocal) {
      setProfile({
        id: userLocal.id,
        name: userLocal.name,
        surname: userLocal.surname,
        email: userLocal.email,
        username: userLocal.username,
        profile_pic: userLocal.profile_pic,
      });
    } else if (userSession) {
      setProfile({
        id: userSession.id,
        name: userSession.name,
        surname: userSession.surname,
        email: userSession.email,
        username: userSession.username,
        profile_pic: userSession.profile_pic,
      });
    }
  };

  useEffect(() => {
    configuration();
  }, []);

  return { profile, userLocal, userSession };
}

export default useProfile;
