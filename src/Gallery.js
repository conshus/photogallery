import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';
window.base = base; //Use base from console

class Gallery extends Component {
  constructor (){
    super();
    this.state = {
      albums: [],
      photos: []
    }
  }

  componentDidMount (){
    console.log('componentDidMount')
    base.syncState(`/albums/`,{
      context: this,
      state: 'albums',
      asArray: true
    })
  }

  handleKeyPress(event) {
    //console.log(event.target.value)
    if ((event.key ==='Enter') && (event.target.value.length > 0)){
      //console.log(event.target.value)
      //this.props.sendWordsToApp(event.target.value)
      event.target.value ="";
    }
  }
  addAlbum(){
    //console.log('add album', document.getElementById('albumName').value, document.getElementById('albumCover').value);
    //this.props.sendAlbumInfoToApp(document.getElementById('albumName').value, document.getElementById('albumCover').value)
    let cover = this.photoUrl.value;
    // console.log(this.albumName.value)
    base.push(`/albums/`,
    { data: {title: this.albumName.value }})
    .then(results => {
      //console.log(cover)
      base.push(`/albums/${results.key}/photos`,
      {data: cover})

    })
    this.albumName.value="";
    this.photoUrl.value="";

  }

  sendAlbumId(albumId){
    //console.log('send album id', albumId);
    this.props.sendAlbumIdToApp(albumId);
  }

  render () {
    return (
      <div className="gallerySection">
        <section className="container">
          <div className="row">
            {console.log('this.state.albums',this.state.albums)}
            {/* {this.props.albums.map(album => (<div className="col s12 m6 l4 album"> */}
            {this.state.albums.map(album => (<div className="col s12 m6 l4 album">
              <Link key={album.key} to={{ pathname: `/album/${album.key}`}} onClick={this.sendAlbumId.bind(this,album.id)}>
                <img className="responsive-img card-stacked" src={album.photos[Object.keys(album.photos)[0]]} alt="album cover"/>
                {console.log(Object.keys(album.photos)[0])}
                {/* <div className="albumTitle flow-text">{album.title}</div> */}
              </Link>
            </div>))}
          </div>
        </section>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large waves-effect waves-light blue-grey lighten-2" href="#modal1">
            <i className="large material-icons">add</i>
          </a>
        </div>
        {/*<!-- Modal Structure -->*/}
        <div id="modal1" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>Add an album</h4>
            <div className="row">
              <div className="input-field col s12">
                <input id="albumName" type="text" className="validate"  autoFocus
          onKeyPress={this.handleKeyPress.bind(this)}  ref={(input) => { this.albumName = input; }}/>
                <label htmlFor="albumName">Enter Album name</label>
              </div>
              <div className="input-field col s12">
                <input id="photoUrl" type="text" className="validate"  ref={(input) => { this.photoUrl = input; }} />
                <label htmlFor="photoUrl">Enter URL of a photo</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.addAlbum.bind(this)}>Add Album</a>
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
