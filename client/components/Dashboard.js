import React from 'react';
import { browserHistory, Link } from 'react-router';


let stores = [
  {
    img: 'http://s3.amazonaws.com/movotoblog/2013/06/NYC/images/7.jpg',
    pic1: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/1.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic2: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/2.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic3: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/3.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic4: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/4.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    name: 'Grocery Store',
    address: '123 Grocery Store Lane',
    score: 92,
    date: 'February 19, 2017',
    avatar: 'http://gooava.com/down.php?id=592',
    aName: 'Homer'
  },
  {
    img: 'https://spoilednyc.com/wp-content/uploads/2015/08/07/final-2719.jpg',
    pic1: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/5.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic2: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/6.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic3: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/7.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic4: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/8.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    name: 'Asian Mart',
    address: '123 Asian Mart Lane',
    score: 89,
    date: 'February 27, 2017',
    avatar: 'http://www.avatarsdb.com/avatars/say_cheese.jpg',
    aName: 'SpongeBob'
  },
  {
    img: 'http://www.sharpshopper.net/Images/Ephrata/Ephrata-Storefront-b.jpg',
    pic1: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/26.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic2: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/31.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic3: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/36.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic4: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/41.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    name: 'Sharp Shopper',
    address: '123 Sharp Shopper Lane',
    score: 95,
    date: 'March 5, 2017',
    avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFepwq3Zf8i8DboMEwltDKXsqnNXEj8EUvGkEOuC4VhEzWVbRr2w',
    aName: 'Edward Cullen'
  },
  {
    img: 'https://s3-media2.fl.yelpcdn.com/bphoto/h2Wy1xZtHPjcK6OCTROlAg/o.jpg',
    pic1: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/4.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic2: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/1.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic3: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/2.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic4: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/3.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    name: 'ABinBev',
    address: '119 W 24th Street',
    score: 79,
    date: 'March 26, 2017',
    avatar: 'http://www.avatarsdb.com/avatars/panda_kiss.gif',
    aName: 'RandomPanda'
  }
]

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

  enterPhoto() {
    this.setState({headerPhoto: true})
  }

  exitPhoto() {
    this.setState({headerPhoto: false})
  }

  render() {
    return (
      <div>
          <div className="off-canvas-wrapper">
            <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
              <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
                <div className="row">
                  <div className="column">
                    <Link to='/store/1'><img id="head-photo" className="thumbnail" src="http://s3.amazonaws.com/movotoblog/2013/06/NYC/images/7.jpg" /></Link>
                    <h5>Alert</h5>
                    <p>This store has been flagged and needs attention.</p>
                  </div>
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
                    <Link to='/store/2'><img className="thumbnail" src="https://spoilednyc.com/wp-content/uploads/2015/08/07/final-2719.jpg" /></Link>
                      <ul>
                        <li>Compliance Level: 46</li>
                        <li>Location: New York</li>
                        <li>Last Checked: 2/12/2017</li>
                      </ul>
                  </div>
                  <div className="column">
                    <Link to='/store/3'><img className="thumbnail" src="http://static1.squarespace.com/static/5252fdf4e4b021f1cd53aadf/t/52ce0e3ce4b00d13b8f22253/1389235774891/Brooklyn+Bodega,+Williamsburg,+Brooklyn.jpg?format=1000w"/></Link>
                      <ul>
                        <li>Compliance Level: 60</li>
                        <li>Location: New York</li>
                        <li>Last Checked: 2/30/2017</li>
                      </ul>
                  </div>
                  <div className="column">
                    <Link to='/store/4'><img className="thumbnail" src="https://s3-media2.fl.yelpcdn.com/bphoto/h2Wy1xZtHPjcK6OCTROlAg/o.jpg" /></Link>
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
