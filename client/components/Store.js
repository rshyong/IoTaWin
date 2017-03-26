import React from 'react';
import { Link } from 'react-router';
import CircularProgressbar from 'react-circular-progressbar';

let stores = [
  {
    img: 'http://www.elcivics.com/images/esl-grocery-store-lesson.jpg',
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
    img: 'https://www.maangchi.com/wp-content/uploads/2010/04/storefront-590x442.jpg',
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
    img: 'http://c8.alamy.com/comp/C4BR8X/st-saint-augustine-florida-publix-grocery-store-supermarket-food-entrance-C4BR8X.jpg',
    pic1: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/45.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic2: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/1.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic3: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/2.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    pic4: 'https://firebasestorage.googleapis.com/v0/b/iotawin-9b07a.appspot.com/o/3.jpg?alt=media&token=03243409-0940-4efb-81d2-5eee7629e0ba',
    name: 'Publix',
    address: '123 Publix Lane',
    score: 88,
    date: 'March 11, 2017',
    avatar: 'http://www.avatarsdb.com/avatars/panda_kiss.gif',
    aName: 'RandomPanda'
  }
]
class Store extends React.Component {

  constructor(props) {
    super(props);
    const theStore = stores[props.routeParams.id - 1];
    let color;
    if (theStore.score < 45) color = 'red';
    else if (theStore.score < 75) color = 'yellow';
    else color = 'green';
    this.state = {store: theStore, img: theStore.img, color: color};
    this.changePic = this.changePic.bind(this);
  }

  componentWillMount() {
    $(document).foundation();
  }

  changePic(pic) {
    this.setState({img: this.state.store[pic]});
  }

  render() {
    let store = this.state.store;
    return (
      <div>
          <div className="top-bar">
            <div className="row">
              <div className="top-bar-left">
                <Link to='/dashboard' style={{'fontSize': '1.5vw'}}> {'Back to Dashboard' }</Link>
              </div>
              <div className="top-bar-right">
                <ul className="menu">
                  <li><input type="search" placeholder="Search" /></li>
                  <li><button type="button" className="button">Search</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="medium-6 columns">
              <img className="thumbnail main" src={this.state.img} />
              <div className="row small-up-4">
                <div className="column">
                  <img className="thumbnail" src={store.img} onClick={() => this.changePic("img")}/>
                </div>
                <div className="column">
                  <img className="thumbnail" src={store.pic1} onClick={() => this.changePic("pic1")}/>
                </div>
                <div className="column">
                  <img className="thumbnail" src={store.pic2} onClick={() => this.changePic("pic2")}/>
                </div>
                <div className="column">
                  <img className="thumbnail" src={store.pic3} onClick={() => this.changePic("pic3")}/>
                </div>
              </div>
            </div>
            <div className="medium-6 large-5 columns">
              <h3 style={{marginBottom: "5%"}}>{store.name}</h3>
              <p><b>Address:</b> {store.address}</p>
              <p><b>Date of Last Inspection:</b> {store.date}</p>
              <p><b>Compliance Score:</b> {store.score}</p>
              <CircularProgressbar
                  percentage={store.score}
                  strokeWidth={7}
                  textForPercentage={() => store.score}
                  classForPercentage={() => `score-${this.state.color}`}
              />
              </div>
          </div>

          <div className="column row">
            <div className="tabs-content" data-tabs-content="example-tabs">
              <div className="tabs-panel is-active" id="panel1">
                <h4>Notes</h4>
                <div className="media-object stack-for-small">
                  <div className="media-object-section">
                    <img className="thumbnail" src={store.avatar} />
                  </div>
                  <div className="media-object-section">
                    <h5>{store.aName}</h5>
                    <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
                <div className="media-object stack-for-small">
                  <div className="media-object-section">
                    <img className="thumbnail" src={store.avatar} />
                  </div>
                  <div className="media-object-section">
                    <h5>{store.aName}</h5>
                    <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you</p>
                  </div>
                </div>
                <div className="media-object stack-for-small">
                  <div className="media-object-section">
                    <img className="thumbnail" src={store.avatar} />
                  </div>
                  <div className="media-object-section">
                    <h5>{store.aName}</h5>
                    <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you</p>
                  </div>
                </div>
                <label>
                  My Note
                  <textarea placeholder="Enter inspection note here"></textarea>
                </label>
                <button className="button">Submit Note</button>
              </div>
            </div>
          </div>
        </div>
          )
        }
      }

export default Store;