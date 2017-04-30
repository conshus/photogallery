import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Album extends Component {
  addPhoto(){
    console.log('add photo', document.getElementById('photoUrl').value);
    this.props.sendPhotoInfoToApp(document.getElementById('photoUrl').value)
  }

  render () {
    const albumId = this.props.match.params.albumId;
    return (
      <div className="albumSection">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">perm_media</i>Album list</div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
              <div className="row">
                {this.props.albums.map(album => (<div className="col s12 m6 l4 album">
                  <Link key={album.id} to={{ pathname: `/album/${album.id}`}}>
                    <img className="responsive-img card-stacked" src={album.photos[0]} />
                    <div className="albumTitle flow-text">{album.title}</div>
                  </Link>
                </div>))}
              </div>
            </div>
          </li>
        </ul>
        {console.log(this.props.match.params.albumId)}
        {console.log('this.props.albums',this.props.albums)}
        {/* <h1>{this.props.match.params.albumId}</h1> */}
        <h1>{albumId}</h1>

        <section className="container">
          <div className="row">

            {

              //this.props.albums.filter(album => album.id == albumId)
              // this.props.albums.filter(function(album, index){
              //   if (album.id === albumId){
              //     //return(
              //       console.log('matches',album.id),
              //       console.log('albumId', albumId),
              //       <div className="col s12 m6 l4 album">
              //         <img className="responsive-img materialboxed" src="https://ia601507.us.archive.org/6/items/OurShow4-22-17/4-22-17-1400.jpg" />
              //       </div>
              //
              //     //)
              //   }
              // })

            //
            //   this.props.albums.map((todo, index) => {
            //
            //   return (
            //     {/*<li className={todo.complete ? "completed" : null || todo.edit ? "editing" : null} key={index}>*/}
            //       <div className="view">
            //         <input className="toggle" type="checkbox" checked={todo.complete} onClick={this.handleToggle.bind(this,todo)} />
            //         <label onDoubleClick={this.handleEdit.bind(this,todo)} >{todo.task}</label>
            //         <button className="destroy" onClick={this.handleDestroy.bind(this,todo)}></button>
            //       </div>
            //       <input
            //         className="edit"
            //         defaultValue={todo.task}
            //         onBlur={this.finishEdit.bind(this)}
            //         onChange={this.editTodo.bind(this, todo)} />
            //     </li>
            //   )
            // })
          }





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
