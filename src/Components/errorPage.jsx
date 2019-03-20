import React from 'react'; 
import ReactFullpage from '@fullpage/react-fullpage';
import '../Styles/error.css';
import { Link } from "react-router-dom";
const ErrorPage = () => (
    <ReactFullpage
      render={({state, fullpageApi}) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div class='center'>
                <h1 id="p404">404</h1>
                <h2 id="there-no">There's nothing here!</h2>
                <Link id="go-to" to='/'>GO TO HOMEPAGE</Link>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      />
  )
  export default ErrorPage;