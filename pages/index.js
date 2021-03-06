import React from 'react'
// import Header from './Header'
import axios from 'axios'
import fetchdata from '../util/fetchData.js'


export default class extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    static async getInitialProps() {
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
        const res = await fetchdata(config)
        const data = await Array.from(res.data.data.administrators)
        console.log(data)
        
        console.log(`Show data fetched. Count: ${data.length}`)
      
        return {
          shows: data
        }
    }

    componentDidMount(){
        console.log(this.props.shows)
    }

    render() {
        // let bgClass = { background: '#00bb9c' }
        // const  { navMain=[] } = this.props
        return (
            <div>
                <style jsx>{`
                    li{
                        margin : 4px
                        font-weight : 600
                    }
                    `}
                </style>
               <h3> Next.js successing .. </h3>

                 {this.props.shows.map(function(value){
                     return(
                        <li key={value.id}>
                        {value.login} : {value.email}
                        </li>
                     )
                  })}      

            </div>
        )
    }
}
