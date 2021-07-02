import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import {useLocation} from 'react-router-dom'

function ScrollToTop({ children }) {
  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     window.scrollTo(0, 0);
  //   });
  //   return () => {
  //     unlisten();
  //   }
  // }, []);

  // return (null);
  const{ pathname } = useLocation();

  useEffect(()=> {
    if (pathname !== '/landing') window.scroll(0,0);
  }, [pathname]);

  return children;
}

// export default withRouter(ScrollToTop);
export default ScrollToTop;