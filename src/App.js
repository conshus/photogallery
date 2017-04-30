import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Album from './Album';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      albums: [
        //{id: 0, title:'Album 0', photos: ['https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg','https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg']},
        // {id: 1, title:'Album 1', cover: 'https://ia601507.us.archive.org/6/items/OurShow4-15-17/4-15-17-1400.jpg'},
        // {id: 2, title:'Album 2', cover: 'https://ia601507.us.archive.org/6/items/OurShow4-8-17/4-8-17-1400.jpg'},
        // {id: 3, title:'Album 3', cover: 'https://ia601507.us.archive.org/6/items/OurShow4-1-17/4-1-17-1400.jpg'},
        // {id: 4, title:'Album 4', cover: 'https://ia601507.us.archive.org/6/items/OurShow3-25-17/3-25-17-1400.jpg'},
        // {id: 5, title:'Album 5', cover: 'https://ia601507.us.archive.org/6/items/OurShow3-18-17/3-18-17-1400.jpg'}
      ],
      photos:[]
    };
  }
  componentDidMount(){
    console.log('componentDidMount')
    const rootRef = firebase.database().ref().child('albums');
    const speedRef = rootRef.child('speed');
    let newAlbumsArray=[];
    // rootRef.on('value', function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();
    //     //console.log('childKey, childData', childKey, childData)
    //     // ...
    //     console.log('childData',childData)
    //     newAlbumsArray.push({id: childKey, title: childData.title, photos: childData.photos});
    //   });
    // }).then(
    // this.setState({
    //   albums: newAlbumsArray
    // })
    // )

    rootRef.on('child_added', snap => {
        const previousList = this.state.albums;
        previousList.push({
            id: snap.val().id,
            title:  snap.val().title,
            photos: snap.val().photos
        });
        this.setState({
            albums: previousList
        });
    });

    console.log('newAlbumsArray',newAlbumsArray);
    // console.log('rootRef',rootRef);
    // speedRef.on('value', snap => {
    //   this.setState({
    //     speed: snap.val()
    //   });
    // });
  }
  addAlbum(title, cover){
    console.log('addAlbum in App.js:', title, cover);
    var newAlbumKey = firebase.database().ref().child('albums').push().key;
    let newAlbum = { id: newAlbumKey, title: title, photos: [cover] }
    firebase.database().ref('albums/'+newAlbumKey).set(newAlbum)
    // let newAlbumsArray = this.state.albums.concat(newAlbum)
    // this.setState({
    //   albums: newAlbumsArray
    // })
  }
  addPhoto(photoUrl){
    console.log('add photo');
  }
  render() {
    return (
      <Router forceRefresh={true}>
        <div className="App">
          {/*<div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>*/}
          <Header />
          <h1>{this.state.speed}</h1>
          <Route exact path="/:filter?" render={(defaultProps) =>  <Gallery albums={this.state.albums} sendAlbumInfoToApp={this.addAlbum.bind(this)} {...defaultProps}/>} />
          <Route path="/album/:albumId?" render={(defaultProps) =>  <Album albums={this.state.albums} sendPhotoInfoToApp={this.addPhoto.bind(this)} {...defaultProps}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
