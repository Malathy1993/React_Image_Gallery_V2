import React, { Component } from 'react'
import './Image.css';
import Popup from'./Popup';

import img1 from './imgs/img1.jpeg';
import img2 from './imgs/img2.jpeg';
import img3 from './imgs/img3.jpeg';
import img4 from './imgs/img4.jpeg';
import img5 from './imgs/img5.jpeg';
import img6 from './imgs/img6.jpeg';

export class Images extends Component {
    constructor(props){
        super(props)
        this.state = {
            imageUrl : "",
            imageUrlArray : [
                img1,
                img2,
                img3,
                img4,
                img5,
                img6
            ],
            showModal : false,
            popImageUrl : ""
        }
    }

    imageSubmitter=(e)=>{
        e.preventDefault();
        let imageUrlsArray = this.state.imageUrlArray;
        imageUrlsArray.push(this.state.imageUrl);
        this.setState({
            imageUrlArray : imageUrlsArray,
            imageUrl : ''
        })
    }

handleChange=(e)=>{
    e.preventDefault();
    this.setState({
        imageUrl : e.target.value
    })
}

handlePopup = (url) =>{
    this.setState({
        showModal : !this.state.showModal,
        popImageUrl : url
    })
    console.log('kkkkkk');
    
}
    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url,index)=>{
            return(
                <img 
                className="singleImage"
                src={url}
                key={index}
                onClick={()=> this.handlePopup(url)} />
            )
        })
        return (
            <div className="Images">
                <form onSubmit={this.imageSubmitter}>
                    <input 
                    type="text"
                    name="url"
                    value={this.state.imageUrl}
                    placeholder="Enter Image URL"
                    onChange={this.handleChange}/>
                    <button type="submit" className="submitButton">
                    Submit Image
                    </button>
                </form>
                {images}
                {this.state.showModal ? (
                    <Popup 
                     popImageUrl = {this.state.popImageUrl}
                     closePopup = {this.handlePopup}
                     />
                ) :null}
            </div>
        )
    }
}

export default Images
