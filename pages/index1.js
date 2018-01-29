import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import fetchdata from '../util/fetchData.js'
// import style from '../style/style.scss'

const url = "http://localhost:4003/graphql?"
// class app extends React.Component{
// }
const Index = (props) => (
  <Layout>
    <style jsx>{`
      li{
        margin : 4px
      }
    `}</style>

    <h1>Shows</h1>
    <img style={{width:150 , height: 140}} src="/static/flash.jpg" />
   
    {props.shows.map(function(value){
        return <li key={value.id}>
        {value.login} : {value.email}
            </li>
    })}
  </Layout>
)


Index.getInitialProps = async function() {
    let config = {
        //url:"http://localhost:4003/graphql?",
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

    const res = await fetchdata(config)
    const data = await Array.from(res.data.data.administrators)
    console.log(data)
    
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }

export default Index