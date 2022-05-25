import React from "react";

import {
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

function ShowPostList({isPost, loading, postList, addPost}){
  return (
    <>
    <PostSection>
        <PostTitleDiv>
            <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
            <PostTitle>익명게시판</PostTitle>
            <FontAwesomeIcon icon={faPenToSquare} />
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
                      <EachPost key={element.id} title={element.title} replCount={element.replCount} />
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