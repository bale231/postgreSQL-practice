import React, { useEffect, useState } from "react";

function useProfile() {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const userSession = JSON.parse(sessionStorage.getItem("user"));
  const [profile, setProfile] = useState({});

  const configuration = () => {
    if (userLocal) {
      setProfile({
        id: userLocal.id,
        email: userLocal.email,
      });
    } else if (userSession) {
      setProfile({
        id: userSession.id,
        email: userSession.email,
      });
    }
  };

  useEffect(() => {
    configuration();
  }, []);

  return { profile, userLocal, userSession };
}

export default useProfile;
