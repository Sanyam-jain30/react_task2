import React from 'react';
import Comment from './comment';

function Comments(){
    const Reply = [
        {
            "active": true,
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9f3emxbTjirC9VEfHyWFSxmVLpe8H9QO2IA&usqp=CAU",
            "name": "Rahul gupta",
            "time": "2 minutes ago",
            "message": "This is a great post" 
        },
        {
            "active": false,
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-L3LM3amOt_N_OOkG1GLRkb5r6HnW8QoA&usqp=CAU",
            "name": "Neha singh",
            "time": "2 minutes ago",
            "message": "This is a great post"
        }
    ];

    return(
        <div className="comment-section">
            <p className="count">2 comments</p>
            {Reply.map((item, index) => {
                return (
                    <Comment
                        key= {item + index}
                        active= {item.active}
                        src= {item.src}
                        name= {item.name}
                        time= {item.time}
                        message= {item.message}
                    />
                );
            })}
        </div>
    );
}

export default Comments;