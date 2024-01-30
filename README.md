# 💻 나만의 블로그 만들기
## 🖱️ 구현 페이지 및 실습
- 로그인, 비로그인에 따른 <strong>`Home, Post`</strong> 페이지를 구현한다.
```
  1. Route 구현
  2. 폴더와 파일세팅
  3. Assets와 Data 세팅
  4. Axios와 json server로 데이터 로드
  5. Styled-components로 스타일 적용
```

<br>

#### [ 로그인 시 ]
![](https://velog.velcdn.com/images/hyeonbinnn/post/d234cd3b-0765-449f-90dc-1ae53d32abff/image.png)

#### [ 비로그인 시 ]
![](https://velog.velcdn.com/images/hyeonbinnn/post/e6789c76-04c4-4b09-85c6-9b7c89e99e82/image.png)

<br>
<br>
<br>

## 🖱️ 폴더 구조
```
💻 MyBlog
├─ 📦 public
│  ├─ 📂 assets
│  ├─ ⭐ blog.ico
│  └─ 📃 index.html
├─ 📦 src
│  ├─ 📂 assets
│  ├─ 📂 components
│  │  ├─ 📂 Banner
│  │  ├─ 📂 Footer
│  │  ├─ 📂 Header
│  │  │  ├─ 📂 Login
│  │  │  ├─ 📂 Logout
│  │  │  ├─ 🧾 Button.jsx
│  │  │  ├─ 🧾 Header.jsx
│  │  │  └─ 🧾 Header.style.jsx
│  │  ├─ 📂 Main
│  │  └─ 📂 View
│  ├─ 📂 context
│  ├─ 📂 data
│  ├─ 📂 pages
│  │  ├─ 📂 Hone
│  │  └─ 📂 Post
│  ├─ 📂 routes
│  ├─ 📂 styles
|  ├─ 📜 App.js
|  └─ 📜 index.js
```

<br>
<br>
<br>

## 🖱️ state 처리를 통해 header 버튼 바꾸기
### Router.jsx
- 사용자 ID와 로그인 상태 나타낸다.
- <strong>`UserContext.Provider`</strong>를 사용해 하위 컴포넌트에서 사용할 수 있는 사용자 정보 컨텍스트 제공한다.

```jsx
  import { useState } from 'react';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import UserContext from '../context/UserContext';
  import { Home } from '../pages/Home/Home';
  import Post from './../pages/Post/Post';

  const Router = () => {
    const [userId, setUserId] = useState(1);
    const [isLogin, setIsLogin] = useState(true);

    // console.log(data);
    return (
      <UserContext.Provider value={{ userId, isLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
  };

  export default Router;
```
<br>
<br>

### Header.jsx
- <strong>`useContext`</strong>훅을 사용해 불러온 사용자 정보 컨텍스트 <strong>`UserContext`</strong>에서 <strong>`isLogin`</strong> 상태를 가져온다. 
- <strong>`isLogin`</strong> 상태에 따라 로그인 컴포넌트와 로그아웃 컴포넌트를 표시한다.

```jsx
  import React from 'react';
  import { useContext } from 'react';
  import UserContext from './../../context/UserContext';
  import imgLogo from '../../assets/Logo.svg';
  import Login from '../Header/Login/Login';
  import Logout from '../Header/Logout/Logout';
  import * as S from './Header.style';

  const Header = () => {
    const { isLogin } = useContext(UserContext);

    return (
      <S.Header>
        <S.Container className="max-width">
          <S.H1>
            <S.HeaderLink to="/">
              <S.HeaderImg src={imgLogo} alt="My Blog" />
            </S.HeaderLink>
          </S.H1>
          <S.HeaderUl>{isLogin ? <Login /> : <Logout />}</S.HeaderUl>
        </S.Container>
      </S.Header>
    );
  };

  export default Header;
```

<br>
<br>
<br>

## 🖱️ 더미 데이터 가져와 게시글, 블로그, 유저 정보 뿌려주기
- 각각의 엔드포인트에 대한 해당 리소스 <strong>`JSON`</strong> 데이터 보기
```
  json-server --watch db.json --port 3001
  
  ↓

  http://localhost:3001/blog
  http://localhost:3001/posts
  http://localhost:3001/users
```
<br>

### Main.jsx
- <strong>`API`</strong> 엔드포인트 중에서 <strong>`http://localhost:3001/posts`</strong>에서 포스트 데이터를 가져와 화면에 표시한다.
- <strong>`posts`</strong> 데이터와 사용자 로그인 상태를 관리하기 위해 상태 및 컨텍스트를 설정한다.
- <strong>`useEffect`</strong> 훅을 사용해 컴포넌트가 마운트될 때 한 번만 실행되는 비동기 함수를 정의해 포스트 데이터를 가져온다.
- <strong>`posts`</strong> 데이터가 존재하는 경우, 화면에 <strong>`Posts`</strong> 컴포넌트를 사용해 <strong>`posts`</strong>를 표시하고, 사용자가 로그인한 경우 <strong>`About`</strong> 컴포넌트를 추가로 표시한다.

```jsx
  import React, { useEffect, useState, useContext } from 'react';
  import UserContext from './../../context/UserContext';
  import axios from 'axios';
  import { About } from './About/About';
  import Posts from './Posts/Posts';
  import * as S from './Main.style';

  const Main = () => {
    const [posts, setPosts] = useState();
    const { isLogin } = useContext(UserContext);

    useEffect(() => {
      axios
        .get('http://localhost:3001/posts')
        .then((json) => {
          setPosts(json.data);
        })
        .catch((error) => {
          console.log('데이터 불러오는 중 에러 발생', error);
        });
    }, []);

    return (
      <main>
        {posts !== undefined ? (
          <S.Container className="max-width">
            <h2 className="a11y-hidden">Post</h2>
            <S.Posts className="posts">
              <Posts posts={posts} />
            </S.Posts>
            {isLogin ? <About /> : <></>}
          </S.Container>
        ) : null}
      </main>
    );
  };

  export default Main;
```

<br>
<br>

### Posts.jsx
- <strong>`posts`</strong> 데이터를 <strong>`props`</strong>로 받아 화면에 표시한다.
- <strong>`posts`</strong> 배열을 <strong>`map`</strong> 함수를 사용해 순회하면서 각 <strong>`post`</strong>에 대한 요소를 만든다.

```jsx
  import React from 'react';
  import Category from '../Category/Category';
  import Author from '../Author/Author';
  import * as S from './Posts.style';

  const Posts = ({ posts }) => {
    return (
      <>
        {posts.map((post) => (
          <li key={post.id}>
            <S.PostLink to={`/post/${post.id}`} className="post">
              <article>
                <S.PostImg src={post.thumbnail} alt="thumbnail" />
                <S.ContentsWrap className="contents-wrap">
                  <Category category={post.category} />
                  <S.PostH3>{post.title}</S.PostH3>
                  <Author
                    profileImg={post.profileImg}
                    userName={post.userName}
                    created={post.created}
                  />
                  <S.PostDescription className="post-description">
                    {post.contents[0].text}
                  </S.PostDescription>
                </S.ContentsWrap>
              </article>
            </S.PostLink>
          </li>
        ))}
      </>
    );
  };

  export default Posts;
```

<br>
<br>


