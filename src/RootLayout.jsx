import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // remove if you want instant
    });
  }, [pathname]);

  return <Outlet />;
};

export default RootLayout;