import React, { Component} from 'react'
import CartContainer from './containers/CartContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsContainer from './containers/ProductsContainer'
import MessagesContainer from './containers/MessagesContainer'

class App extends Component {
  render() {
    return (
        <div  className="hidden-sn animated deep-purple-skin">
            <Header/>
            <main id="mainContainer">
              <div class="container">
                <ProductsContainer />
                <MessagesContainer />
                <CartContainer />
              </div>
            </main>
            <Footer />
        </div>
     );
}
}

export default App;
