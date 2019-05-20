import React, { Component } from 'react';
import Board from './Board';
import axios from 'axios';
class BoradForm extends Component {
    state = {
        board_title : '',
        board_contents : '',
        board_author: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        const {board_title, board_contents} = this.state;
        // 페이지 리로딩 방지
        e.preventDefault();

        const board = {
            board_title : board_title,
            board_contents : board_contents
        }
        console.log("BoardForm에서 board객체: " + JSON.stringify(board));
        axios.post('/user/BoardForm', board)
        
        // 상태 초기화
        this.setState({
            board_title: '',
            board_contents: '',
            board_author: ''
        })
        
        this.props.history.push('/board');



    }

    render () {
        return(
            <form onSubmit={this.handleSubmit} style={{margin: 'auto', width: '50%', marginTop: '50px'}}>
                <h1 className="text-success" style={{marginTop: '40px', fontFamily: 'monospace', fontSize: '3vw'}}>Posting</h1>
                <hr/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: "1.5vw"}}>title</h4>
                <textarea
                    // placeholder="제목"
                    value={this.state.board_title}
                    onChange={this.handleChange}
                    name="board_title"
                    className="form-control"
                    style = {{width: '100%'}}
                />
                <p/>
                <h4 style={{marginBottom: '2px', fontFamily: 'monospace', fontSize: "1.5vw"}}>content</h4>
                <textarea
                    // placeholder="내용"
                    value={this.state.board_contents}
                    onChange={this.handleChange}
                    name="board_contents"
                    className="form-control"
                    style = {{width: '100%', height: '300px'}}
                />
                <hr/>
                {/* 유저명 <input
                    // placeholder="유저명"
                    value={this.state.board_author}
                    onChange={this.handleChange}
                    name="board_author"
                    style = {{width: '454px'}}
                />
                <p/> */}
                <button type="submit" className="btn btn-primary" style={{float: 'right', fontFamily: 'monospace', fontSize: '1.5vw'}}>ok</button>
            </form>

        )
    }
}
export default BoradForm;