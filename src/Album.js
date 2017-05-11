import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from './rebase';
window.base = base; //Use base from console

class Album extends Component {
  constructor (){
    super();
    this.state = {
      album: [],
      photos: [],
      modal: false,
      modalPhoto: ''
    }
  }

  componentDidMount (){
    base.syncState(`/albums/${this.props.match.params.albumId}`,{
      context: this,
      state: 'album',
      asArray: false
    })
    base.syncState(`/albums/${this.props.match.params.albumId}/photos`,{
      context: this,
      state: 'photos',
      asArray: true
    })
  }

  addPhoto(albumId){
    base.push(`/albums/${this.props.match.params.albumId}/photos`,
    { data: this.photoUrl.value })
    this.photoUrl.value="";
  }


  displayModal(event){
    this.setState({
      modal: !this.state.modal,
      modalPhoto: event.target.src
    })
    return(
      <div className="modalWindow">
        <img className="responsive-img" src={this.state.modalPhoto} alt="bigger pic" />
      </div>
    )
  }
  changeModalImage(index){
    this.setState({
      modalPhoto: this.state.photos[index]
    })
  }
  displayPrevNextButtons(){
    let currentPicIndex = this.state.photos.indexOf(this.state.modalPhoto);
    let prevButton;
    let nextButton;
    currentPicIndex > 0 ?
      prevButton = <button onClick={this.changeModalImage.bind(this,currentPicIndex-1)} className="btn-floating btn-large waves-effect waves-light blue-grey lighten-2"><i className="material-icons">keyboard_arrow_left</i></button>
      : null;
      currentPicIndex < this.state.photos.length-1 ?
        nextButton = <button onClick={this.changeModalImage.bind(this,currentPicIndex+1)} className="btn-floating btn-large waves-effect waves-light blue-grey lighten-2"><i className="material-icons">keyboard_arrow_right</i></button>
        : null;
    return(

      <div>{prevButton}{nextButton}</div>
    )
  }

  render () {
    const albumId = this.props.match.params.albumId;
    return (
      <div className="albumSection">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">perm_media</i>Album list</div>
            <div className="collapsible-body">
              <div className="row">
                {this.props.albums.map((album,item) => (
                  <div key={item} className="col s6 m2 l2 album">
                  <Link key={album.key} to={{ pathname: `/album/${album.key}`}}>
                    <img className="responsive-img card-stacked" src={album.photos[Object.keys(album.photos)[0]]} alt="album cover"/>
                  </Link>
                </div>))}
              </div>
            </div>
          </li>
        </ul>

        <section className="container">
          <h1>{this.state.album.title}</h1>
          <div className="row">
            {this.state.photos.map((photo, index) => (
              <div key={index} className="col s12 m6 l4 album">
                <img className="responsive-img materialboxed" src={photo} alt="photo" onClick={this.displayModal.bind(this)}/>
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
            <h4>Add a photo</h4>
            <div className="input-field col s12">
              <input id="photoUrl" type="text" className="validate"  ref={(input) => { this.photoUrl = input; }}/>
              <label htmlFor="email">Enter URL of a photo</label>
            </div>

          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.addPhoto.bind(this,{albumId})}>Add Photo</a>
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {this.state.modal ?
          <div>
            <div className="modalWindow">
              <div id="navButtons"><span>{this.displayPrevNextButtons()}</span><span><button className="btn-floating btn-large waves-effect waves-light blue-grey lighten-2" onClick={this.displayModal.bind(this)}><i className="material-icons">clear</i></button></span></div>

              <div className="row">
                  <img className="modalImage" src={this.state.modalPhoto}/>
              </div>
            </div>
          </div>
          : null}
      </div>
    )
  }
}

export default Album
