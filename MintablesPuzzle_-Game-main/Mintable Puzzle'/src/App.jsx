import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageGallery from "./Components/ImageGallery";
import Button from './Components/Button';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // Your MetaMask connection logic here
    // Once connected, set isConnected to true
    setIsConnected(true);
  };

  return (
    // <Router>
    //   <div>
    //     <Route path="/gallery">
    //       {isConnected && <ImageGallery />}
    //     </Route>
    //     <Route exact path="/">
    //       <Button onConnect={handleConnect} isConnected={isConnected} />
    //     </Route>
    //   </div>
    // </Router>
    <>
      <Button />
    </>
  );
};

export default App;
