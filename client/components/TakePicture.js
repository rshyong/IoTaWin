import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

// require the client
var Clarifai = require('clarifai');
// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  'D1XTyOGA2C_AybXawDJA-AQOTuTyrwHb-ItNe8cR',
  'P90PSl_Dp8fER4NtNO9o9L5rsUopICaWW25F6q3v'
);

/* ----- COMPONENT ----- */

class TakePicture extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      files: {},
      holdingURL: '',
      imgURL: '',
      error: '',
      count: 101
    };

    this.database = firebase.database();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImgUpload = this.handleImgUpload.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let concepts = [
      {id: e.target.cbox1.value, value: e.target.cbox1.checked},
      {id: e.target.cbox2.value, value: e.target.cbox2.checked},
      {id: e.target.cbox3.value, value: e.target.cbox3.checked},
      {id: e.target.cbox4.value, value: e.target.cbox4.checked},
      {id: e.target.cbox5.value, value: e.target.cbox5.checked},
      {id: e.target.cbox6.value, value: e.target.cbox6.checked},
      {id: e.target.cbox7.value, value: e.target.cbox7.checked},
      {id: e.target.cbox8.value, value: e.target.cbox8.checked},
      {id: e.target.cbox9.value, value: e.target.cbox9.checked},
    ];

    console.log(this.state.imgURL);
    console.log(concepts);

    app.inputs.create({
        url: this.state.imgURL,
        concepts: concepts
    }).then(
    function(response) {
        console.log(response);
        app.models.train("fridge").then(
          function(res) {
              console.log(res);
          },
          function(err) {
              console.log(err);
          }
        );
    },
    function(err) {
        console.log(err);
    }
);

  }

  // onClick event for taking or choosing a local picture file
  handleImgUpload(e){
    // get the file off of the submit event
    var files = e.target.files,
        file;
    if (!files[0]) return;

    // if (!this.validFile(files[0].name)) {
    //   this.setState({
    //     error: 'Supported File Types: JPEG, TIFF, BMP'
    //   })
    //   return;
    // }

    if (files && files.length > 0) {

      file = files[0];

      this.setState({
        file: file,
        error: '',
      })

      try {
        // Get window.URL object
        var URL = window.URL || window.webkitURL;

        var imgURL = URL.createObjectURL(file);

        var uploadName = "";
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        // you only have access to the read file inside of this callback(?)function
        fileReader.onload = () => {

          const imgBytes = fileReader.result.split(',')[1]
          var extension = file.name.split('.')[1];
          uploadName = this.state.count + '.' + extension;
          this.setState({count: this.state.count + 1});

          var storageRef = firebase.storage().ref();
          console.log(storageRef);
          var imgRef = storageRef.child(uploadName);
          console.log(imgRef);
          // imgRef.getDownloadURL().then(url => this.setState({imgURL: imgURL}));

          imgRef.put(file).then(snapshot =>{
            this.setState({imgURL: snapshot.downloadURL})
            console.log('uploaded blob!')
          })
        }

      }
      catch (err) {
        try {
          // Fallback if createObjectURL is not supported
          var fileReader = new FileReader();
          fileReader.onload = function (event) {
            this.setState({
              imgURL: event.target.result,
            })
          };
          fileReader.readAsDataURL(file);
        }
        catch (err) {
          // Display error message

        }
      }
    }
  }

// check for file compatability before app crashes because of a PNG or GIF...
/*     if(filename.value == '') {
            alert('Please browse for a file!');
            return;
          }

          else if (!this.validFile(filename.value)) {
            alert('Supported File Types: JPEG, PNG, TIFF, BMP');
            return;
          }*/

  render(){
    const styling = {transform: "scale(2)", display: "inline-block", margin: "8px"};
    const inline = {display: "inline-block"};
    return (
      <div className="container">
        <h1>Choose Concepts and Take Picture</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="file"
                id="take-picture"
                accept="image/*"
                onChange={this.handleImgUpload} />
            <br/>
            <label htmlFor="cbox1" style={inline}>stella artois</label>
            <input type="checkbox" id="cbox1" value="stella artois" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox2" style={inline}>apocalypse ipa</label>
            <input type="checkbox" id="cbox2" value="apocalypse ipa" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox3" style={inline}>virtue</label>
            <input type="checkbox" id="cbox3" value="virtue" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox4" style={inline}>hoegaarden</label>
            <input type="checkbox" id="cbox4" value="hoegaarden" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox5" style={inline}>shock top</label>
            <input type="checkbox" id="cbox5" value="shock top" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox6" style={inline}>elysian</label>
            <input type="checkbox" id="cbox6" value="elysian" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox7" style={inline}>empty</label>
            <input type="checkbox" id="cbox7" value="empty" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox8" style={inline}>compliant</label>
            <input type="checkbox" id="cbox8" value="compliant" style={styling} /><br/><br/><br/>
            <label htmlFor="cbox9" style={inline}>organized</label>
            <input type="checkbox" id="cbox9" value="organized" style={styling} /><br/><br/><br/>
            <button type="submit">Submit</button>
          </form>
      </div>

        { this.state.error && <div className="alert alert-warning">{this.state.error}</div> }
        {(this.state.imgURL)
          ?
          (
          <div>
            <img
              id="show-picture"
              className="img-responsive"
              src={this.state.imgURL}
              height="auto"
              width="300"
            ></img>
          </div>
          )
          : null
        }



      </div>
    )
  }
}

export default connect(null, null)(TakePicture);