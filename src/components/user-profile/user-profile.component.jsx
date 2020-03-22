import React from 'react';


class UserProfile extends React.Component {

    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // Fetch fake data
        fetch('https://jsonplacerholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}));
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.email}</h2>
                <h3>Posts</h3>
                {
                    this.state.posts.map(post =>
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>)
                }
            </div>
        )
    }
}

export default UserProfile;