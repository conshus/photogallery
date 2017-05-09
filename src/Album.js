import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Album extends Component {
  addPhoto(albumId){
    //console.log('albumId', albumId.albumId)
    //console.log('add photo', document.getElementById('photoUrl').value);
    this.props.sendPhotoInfoToApp(albumId.albumId,document.getElementById('photoUrl').value)
  }

  sendAlbumId(albumId){
    //console.log('send album id', albumId);
    this.props.sendAlbumIdToApp(albumId);
  }

    // sendAlbumId(match.params.albumId)

  render () {
    const albumId = this.props.match.params.albumId;
    console.log(albumId)
    return (
      <div className="albumSection">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">perm_media</i>Album list</div>
            <div className="collapsible-body">
              {/* <div className="carousel">
                  <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"/></a>
                  <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"/></a>
                  <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"/></a>
                  <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"/></a>
                  <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"/></a>
              </div> */}
              <div className="row">
                {this.props.albums.map(album => (
                  <div className="col s6 m2 l2 album">
                  <Link key={album.id} to={{ pathname: `/album/${album.id}`}} onClick={this.sendAlbumId.bind(this,album.id)}>
                    <img className="responsive-img card-stacked" src={album.photos[0]} alt="album cover"/>
                    {/* <div className="albumTitle flow-text">{album.title}</div> */}
                  </Link>
                </div>))}
              </div>
            </div>
          </li>
        </ul>
        {/* {console.log(this.props.match.params.albumId)}
        {console.log('this.props.albums',this.props.albums)} */}
        {/* <h1>{this.props.match.params.albumId}</h1> */}
        {/* <h1>{albumId}</h1> */}

        <section className="container">
          {/* <div className="row">
            <div className="col s12 m6 l4 album">

            {this.props.photos.map(photo => (
              //console.log(photo.photos.length),
              for (i=0; i<photo.photos.length){
                  <img className="responsive-img materialboxed" src={photo[i].photos} alt="album cover"/>
              }
            ))}

            </div>
          </div> */}
            {

              //this.props.albums.filter(album => album.id == albumId)
              // this.props.albums.filter(function(album, index){
              //   if (album.id === albumId){
                  //return(
                    // console.log('matches',album.id),
                    // console.log('albumId', albumId),
                    // <div className="col s12 m6 l4 album">
                    //   <img className="responsive-img materialboxed" src="https://ia801501.us.archive.org/5/items/OurShow4-29-17/4-29-17-1400.jpg" />
                    // </div>

                  //)
                //}
              //})

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




          <div className="row">

            <div className="col s12 m6 l4 album">
              <img className="responsive-img materialboxed" src="https://images.unsplash.com/photo-1484027224881-a91762262d8e" alt="album"/>
            </div>
            <div className="col s12 m6 l4 album">
              <img className="responsive-img materialboxed" src="https://images.unsplash.com/photo-1481876453656-5f9968fda498" alt="album"/>
            </div>
            <div className="col s12 m6 l4 album">
              <img className="responsive-img materialboxed" src="https://images.unsplash.com/photo-1474980660552-84fda824db4e" alt="album"/>
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
            <a className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.addPhoto.bind(this,{albumId})}>Add Photo</a>
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Album
