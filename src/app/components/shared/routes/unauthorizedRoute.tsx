import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

type Props = {
  children: JSX.Element;
};

export const UnauthorizedRoute = ({ children }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, [user]);

  return <>{children}</>;
};
