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
    base.syncState(`/albums/`,{
      context: this,
      state: 'albums',
      asArray: true
    })
  }

  handleKeyPress(event) {
    if ((event.key ==='Enter') && (event.target.value.length > 0)){
      event.target.value ="";
    }
  }
  addAlbum(){
    let cover = this.photoUrl.value;
    base.push(`/albums/`,
    { data: {title: this.albumName.value }})
    .then(results => {
      base.push(`/albums/${results.key}/photos`,
      {data: cover})

    })
    this.albumName.value="";
    this.photoUrl.value="";

  }

  render () {
    return (
      <div className="gallerySection">
        <section className="container">
          <div className="row">
            {this.state.albums.map((album, index) => (<div key={index} className="col s12 m6 l4 album">
              <Link key={album.key} to={{ pathname: `/album/${album.key}`}}>
                <img key={index} className="responsive-img card-stacked" src={album.photos[Object.keys(album.photos)[0]]} alt="album cover"/>
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
