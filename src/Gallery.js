import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';

const ALBUMS = [
  {id: 0, title:'Album 0', cover: 'https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg'},
  {id: 1, title:'Album 1', cover: 'https://ia601507.us.archive.org/6/items/OurShow4-15-17/4-15-17-1400.jpg'},
  {id: 2, title:'Album 2', cover: 'https://ia601507.us.archive.org/6/items/OurShow4-8-17/4-8-17-1400.jpg'},
  {id: 3, title:'Album 3', cover: 'https://ia601507.us.archive.org/6/items/OurShow4-1-17/4-1-17-1400.jpg'},
  {id: 4, title:'Album 4', cover: 'https://ia601507.us.archive.org/6/items/OurShow3-25-17/3-25-17-1400.jpg'},
  {id: 5, title:'Album 5', cover: 'https://ia601507.us.archive.org/6/items/OurShow3-18-17/3-18-17-1400.jpg'}
]

class Gallery extends Component {
  render () {
    return (
      <div className="gallerySection">
        <section className="container">
          <div className="row">
            {ALBUMS.map(album => (<div className="col s12 m6 l4 album">
              <Link key={album.id} to={{ pathname: `/album/${album.id}`}}>
                <img className="responsive-img card-stacked" src={album.cover} />
                <div className="albumTitle flow-text">{album.title}</div>
              </Link>
            </div>))}
            {/* <div className="col s12 m6 l4 album">
              <Link to='/album/0'>
                <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
                <div className="albumTitle flow-text">Title</div>
              </Link>
            </div> */}
            {/* <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img card-stacked" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div> */}
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
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
