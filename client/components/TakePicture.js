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
      count: 0
    };

    this.database = firebase.database();

    this.handleImgUpload = this.handleImgUpload.bind(this);
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

        this.setState({
          imgURL: imgURL
        })
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

          imgRef.put(file).then(function(snapshot){
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
    return (
      <div className="container">
        <h1>HELLO</h1>
        <div>
          <div style={{display: "inline-block"}}>
          <input type="file"
              id="take-picture"
              accept="image/*"
              onChange={this.handleImgUpload} />
        </div>
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