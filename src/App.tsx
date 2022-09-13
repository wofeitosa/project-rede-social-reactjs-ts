import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role:"" }
// publishedAt: Date
// content: String


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/wofeitosa.png',
      name: 'Wagner Feitosa',
      role: 'Web developer'

    },
    content: [
      {type: 'paragraph', content: 'fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ErikGMatos.png',
      name: 'Erik Matos',
      role: 'Web Developer'

    },
    content: [
      {type: 'paragraph', content: 'fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-16 20:00:00'),
  },
];


 export function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
         
        </main>
      </div>

    </div>
  )
}


