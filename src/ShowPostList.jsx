import React, { useState, useEffect, useCallback } from "react";

import {
    CursorDiv,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import EachPost from './EachPost';
import loadingIcon from './loading.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPost from './EachPost'
import { useNavigate } from "react-router-dom";

const initialPostList = [
    { id: 1, title: ', 시사N 대학기자상 취재'},
    { id: 2, title: '학보, 시사N 대학기자상 취재'},
    { id: 3, title: '학보, 시사N 대학기자상 취재'},
]

function ShowPostList(){
    const [loading, setLoading] = useState(true);
    const [isPost, setIsPost] = useState(false);
    const [postList, setPostList] = useState([]);

    // const addPost = () => {
    //     setPostList((postList) => [
    //         ...postList, {id: 4, title: '학보, 시사N 대학기자상 취재', replCount: 21},
    //     ])
    // };

    // useCallback으로 addPost() memorize!
    const addPost = useCallback(() => {
        setPostList((postList) => [
            ...postList, 
            {id: 4, title: '학보, 시사N 대학기자상 취재', replCount: 21},
        ])
    }, [postList]);  // postList가 바뀌면 연산해주세요~ -> dependency 주기

    const navigate = useNavigate();
    const goWrite = () => {
        navigate('/write');
    };

    useEffect(() => {
        setTimeout(() => {
            setPostList(initialPostList);
            setLoading(false);
        }, 500)
    }, []);

  return (
    <>
    <PostSection>
        <PostTitleDiv>
            <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
            <PostTitle>익명게시판</PostTitle>
            <CursorDiv>
                <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
            </CursorDiv>
            
        </PostTitleDiv>
        <PostListDiv>
            {loading ? (
                <LoadingDiv>
                    <LoadingImg src={loadingIcon} />
                </LoadingDiv>
            ) : isPost ? (
                <LoadingDiv>
                    아직 기록된 글이 없습니다. 
                </LoadingDiv>
            ) : (
                <ul>
                    {postList.map((element) => (
                      <EachPost key={element.id} title={element.title} 
                        postID={element.id} />
                    ))}
                </ul>
            )}
        
        </PostListDiv>
    </PostSection>
                            

    <PagingSection>
        <PagenumberDiv>
            <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>
        <PagenumberDiv>
            <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
    </PagingSection>
    </>
  )
}

export default ShowPostList