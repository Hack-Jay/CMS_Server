import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import axios from 'axios'


const url = "http://localhost:4003/graphql?"

const Index = (props) => (
  <Layout>
    <h1>Shows</h1>
    <img style={{width:150 , height: 140}} src="/static/flash.jpg" />
    {/* <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul> */}
    {props.shows.map(function(value){
        return <li key={value.id}>
        {value.login} : {value.email}
            </li>
    })}
  </Layout>
)

// Index.getInitialProps = async function() {
//   const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

Index.getInitialProps = async function() {
    let config = {
        url:"http://localhost:4003/graphql?",
        method:"post",
        data:{
            query : `
                query {
                    administrators { 
                        id , login , email 
                    }
                }`
        }
    }
            
    // const data = await Array.from(res.data.data.administrators)
    // const data = await Array.from(res.data.data.administrators)
    // let data = []
    // await axios(config).then((res) => {
    //     data = Array.from(res.data.data.administrators)
    // })

    const res = await axios(config)
    const data = await Array.from(res.data.data.administrators)
    console.log(data)
    
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }

export default Index