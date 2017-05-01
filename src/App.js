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
      photos:[
        {id:'-Kj0ZlTD9hGymJzGLpOw',
         photos:[
           'https://images.unsplash.com/photo-1484027224881-a91762262d8e',
           'https://images.unsplash.com/photo-1481876453656-5f9968fda498',
           'https://images.unsplash.com/photo-1474980660552-84fda824db4e'
         ]
       },
         {id:'-Kj0bGhIj60ZJlLTlm3n',
          photos:[
            'https://images.unsplash.com/photo-1485120252639-4955174c75d6',
            'https://images.unsplash.com/photo-1487068211616-9bb29b905f39',
            'https://images.unsplash.com/photo-1487533159651-657914e22ccc'
          ]
        },
          {id:'-Kj0d9i7phyE1oUc-tst',
           photos:[
             'https://images.unsplash.com/photo-1485114293056-e1f6fce12d81',
             'https://images.unsplash.com/photo-1483959651481-dc75b89291f1',
             'https://images.unsplash.com/photo-1483920845706-e2241f3d39a4'
           ]
         },
         {id:'-Kj0gc9KoXdK62UYWhba',
          photos:[
            'https://images.unsplash.com/photo-1488149048941-581936ced6d6',
            'https://images.unsplash.com/photo-1485662765173-b710c399cd34',
            'https://images.unsplash.com/photo-1482148829819-e32810d7e13a'
          ]
        },
        {id:'-Kj0hVZ9EjplDsgq-5jA',
         photos:[
           'https://images.unsplash.com/photo-1493246170452-245ed1f8de09',
           'https://images.unsplash.com/photo-1491403938640-b57372002c94',
           'https://images.unsplash.com/photo-1490966714045-e64ef4e82580'
         ]
       },
       {id:'-Kj0jKnNhAOkr_5I1n5G',
        photos:[
          'https://images.unsplash.com/photo-1493119508027-2b584f234d6c',
          'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7',
          'https://images.unsplash.com/photo-1491234323906-4f056ca415bc'
        ]
      }

      ]
    };
  }
  componentDidMount(){
    //console.log('componentDidMount')
    const rootRef = firebase.database().ref().child('albums');
    //const speedRef = rootRef.child('speed');
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
        const albumsArray = this.state.albums;
        albumsArray.push({
            id: snap.val().id,
            title:  snap.val().title,
            photos: snap.val().photos
        });
        this.setState({
            albums: albumsArray
        });
    });

    //console.log('newAlbumsArray',newAlbumsArray);
    // console.log('rootRef',rootRef);
    // speedRef.on('value', snap => {
    //   this.setState({
    //     speed: snap.val()
    //   });
    // });
  }
  addAlbum(title, cover){
    //console.log('addAlbum in App.js:', title, cover);
    var newAlbumKey = firebase.database().ref().child('albums').push().key;
    let newAlbum = { id: newAlbumKey, title: title, photos: [cover] }
    firebase.database().ref('albums/'+newAlbumKey).set(newAlbum)
    // let newAlbumsArray = this.state.albums.concat(newAlbum)
    // this.setState({
    //   albums: newAlbumsArray
    // })
  }
  addPhoto(albumId,photoUrl){
    //console.log('add photo',albumId,photoUrl);
    firebase.database().ref('albums/'+albumId+'/photos').push(photoUrl)
  }
  filterPhotos(albumId){
    console.log(this.state.photos[albumId]);
    console.log('filter photos',albumId);
    let newPhotosArray = this.state.albums.filter(function(album, index){
      if (album.id === albumId){
        console.log(album.photos)
        return(album.photos)
      }
    })
    this.setState({
      photos: this.state.photos[albumId]
    })

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
          <Route exact path="/:filter?" render={(defaultProps) =>  <Gallery albums={this.state.albums} sendAlbumIdToApp={this.filterPhotos.bind(this)} sendAlbumInfoToApp={this.addAlbum.bind(this)} {...defaultProps}/>} />
          <Route path="/album/:albumId?" render={(defaultProps) =>  <Album photos={this.state.photos} albums={this.state.albums} sendAlbumIdToApp={this.filterPhotos.bind(this)} sendPhotoInfoToApp={this.addPhoto.bind(this)} {...defaultProps}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
