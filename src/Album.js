import React, { Component } from 'react';

class Album extends Component {
  addPhoto(){
    console.log('add photo', document.getElementById('photoUrl').value);
    this.props.sendPhotoInfoToApp(document.getElementById('photoUrl').value)
  }

  render () {
    return (
      <div className="albumSection">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">perm_media</i>Album list</div>
            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
        </ul>
        <h1>{this.props.speed}</h1>

        <section className="container">
          <div className="row">
            <div className="col s12 m6 l4 album">
              <img className="responsive-img materialboxed" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            {/* <div className="col s12 m6 l4">
              <img className="responsive-img" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
            </div>
            <div className="col s12 m6 l4">
              <img className="responsive-img" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
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
            <h4>Add a photo</h4>
            <div className="input-field col s12">
              <input id="photoUrl" type="text" className="validate" />
              <label htmlFor="email">Enter URL of a photo</label>
            </div>

          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.addPhoto.bind(this)}>Add Photo</a>
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Album
