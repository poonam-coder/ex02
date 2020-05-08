import React, { Component } from 'react';
import './avatarstyle.css';
import Avtarlist from './Avtarlist';
import 'tachyons';


    class Avatar extends Component{
        constructor(){
            super();
            this.state={
                name : "Welcome to Avatar world Creation"
            } 
        }
        namechange(){
            this.setState(
                {
                    name : "Subscribe to Avatar world"
                }
            )
        }
        render(){
            const Avtarlistarray = [
                {
           id: 1,
           name:"sONa",
           work: "web developer"
        
                },
                {
                    id: 2,
                    name:"MONa",
                    work: "do net developer"
                 
                         },
                         {
                            id: 3,
                            name:"TiNa",
                            work: "web developer"
                         
                                 },
                                 {
                                    id: 4,
                                    name:"AaNa",
                                    work: "Backend developer"
                                 
                                         },
                {
                    id: 5,
                    name:"POonam",
                    work: "Java developer"
                         }
            ]
            const Avatarlistcard= Avtarlistarray.map((avatarcard,i) => {
             return (
        
                <Avtarlist key={i} id={Avtarlistarray[i].name} 
                              name={Avtarlistarray[i].name} 
                                  work={Avtarlistarray[i].work} />
             
             
            
    
             )
             }
            )
            return (
                <div className="mainpage">
                <h1>{this.state.name}</h1>
                {Avatarlistcard} 
                 <button onClick= {() => this.namechange()}>Subscribe</button>
            </div>
            
            )
            
    
    }
}
    
export default Avatar;