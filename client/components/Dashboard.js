import React from 'react';
import { browserHistory } from 'react-router';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headerPhoto: false
    }
    this.enterPhoto = this.enterPhoto.bind(this)
    this.exitPhoto = this.exitPhoto.bind(this)
    this.enterSite = this.enterSite.bind(this);
  }

  enterSite(id) {
    browserHistory.push(`/store/${id}`);
  }
  
  componentWillMount() {
      $(document).foundation();
  }
  
  enterPhoto () {
    this.setState({headerPhoto: true})
  }
  
  exitPhoto () {
    this.setState({headerPhoto: false})
  }
  
  render() {
    return (
      <div>
          <div className="off-canvas-wrapper">
            <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
              <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
                <div className="row column">
                  {this.state.headerPhoto ? 
                  <img id="head-photo" onMouseOver={this.enterPhoto} className="thumbnail" src="http://s3.amazonaws.com/movotoblog/2013/06/NYC/images/7.jpg" /> 
                  : <img id="head-photo" className="thumbnail" onMouseOut={this.exitPhoto} src="http://s3.amazonaws.com/movotoblog/2013/06/NYC/images/7.jpg" /> }
                  <h5>Alert</h5>
                  <p>This store has been flagged and needs attention.</p>
                </div>
              </div>
              <div className="off-canvas-content" data-off-canvas-content>
                <div className="title-bar hide-for-large">
                  <div className="title-bar-left">
                    <button className="menu-icon" type="button" data-open="my-info"></button>
                  </div>
                </div>
                <div className="callout primary">
                  <div className="row column">
                    <h1>Welcome to the dashboard!</h1>
                    <p className="lead">These are some of the store locations that have non-compliant product placements.</p>
                  </div>
                </div>
                <div className="row small-up-2 medium-up-3 large-up-4">
                  <div className="column">
                    <img className="thumbnail" src="https://spoilednyc.com/wp-content/uploads/2015/08/07/final-2719.jpg" />
                      <ul>
                        <li>Compliance Level: 46</li>
                        <li>Location: New York</li>
                        <li>Last Checked: 2/12/2017</li>
                      </ul>
                  </div>
                  <div className="column">
                    <img className="thumbnail" src="http://static1.squarespace.com/static/5252fdf4e4b021f1cd53aadf/t/52ce0e3ce4b00d13b8f22253/1389235774891/Brooklyn+Bodega,+Williamsburg,+Brooklyn.jpg?format=1000w" />
                      <ul>
                        <li>Compliance Level: 60</li>
                        <li>Location: New York</li>
                        <li>Last Checked: 2/30/2017</li>
                      </ul>
                    <img className="thumbnail" src="http://placehold.it/550x550" onClick={() => this.enterSite(2)}/>
                    <h5>My Site</h5>
                  </div>
                  <div className="column">
                    <img className="thumbnail" src="https://s3-media2.fl.yelpcdn.com/bphoto/h2Wy1xZtHPjcK6OCTROlAg/o.jpg" />
                        <ul>
                          <li>Compliance Level: 79</li>
                          <li>Location: New York</li>
                          <li>Last Checked: 2/30/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201703/519210541.jpg" />
                        <ul>
                          <li>Compliance Level: 72</li>
                          <li>Location: New York</li>
                          <li>Last Checked: 4/1/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYaW6YEg11p85obD6Sp9_Zd98PHokzXvBWZnQCl_loVCVc9cuR" />
                        <ul>
                          <li>Compliance Level: 85</li>
                          <li>Location: DC</li>
                          <li>Last Checked: 1/12/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2015/10/08/BostonGlobe.com/Business/Images/wiggs_Wegmans_478581.jpg" />
                        <ul>
                          <li>Compliance Level: 77</li>
                          <li>Location: DC</li>
                          <li>Last Checked: 3/5/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="http://www.markramseymedia.com/wp-content/uploads/2011/09/kroger.jpg" />
                        <ul>
                          <li>Compliance Level: 60</li>
                          <li>Location: Toronto</li>
                          <li>Last Checked: 3/5/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="http://cdn.kevinmd.com/blog/wp-content/uploads/SAFEWAY-STORE.jpg" />
                        <ul>
                          <li>Compliance Level: 60</li>
                          <li>Location: Toronto</li>
                          <li>Last Checked: 3/5/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="https://www.maangchi.com/wp-content/uploads/2010/04/storefront-590x442.jpg" />
                        <ul>
                          <li>Compliance Level: 60</li>
                          <li>Location: New York</li>
                          <li>Last Checked: 3/5/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="http://i.dailymail.co.uk/i/pix/2010/07/28/article-0-005C458400000258-991_468x286.jpg" />
                        <ul>
                          <li>Compliance Level: 60</li>
                          <li>Location: New York</li>
                          <li>Last Checked: 3/5/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="http://www.faughnfamily.com/wp-content/uploads/2012/02/Publix-store-front.jpg" />
                        <ul>
                          <li>Compliance Level: 60</li>
                          <li>Location: New York</li>
                          <li>Last Checked: 3/5/2017</li>
                        </ul>
                  </div>
                  <div className="column">
                      <img className="thumbnail" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-uwYxxfiTJtVJZ1shsmfvP5ztknG2oOs6ghnC9PE8bno1Ssug" />
                        <ul>
                          <li>Compliance Level: 60</li>
                          <li>Location: New York</li>
                          <li>Last Checked: 3/5/2017</li>
                        </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
