import React, { Component } from 'react'
import {Image,Input,Button,Card,Icon,Grid} from 'semantic-ui-react'

export default class News extends Component {
    constructor()
    {
        super()
        this.state= {
            loc:'',
            title:'hello',
            news:[],
            
        }
        
    }
    
    onSearch()
    {
        // console.log('dfsdf'+this.state.loc)
        fetch(`https://newsapi.org/v2/everything?q=${this.state.loc}&from=2018-11-18&sortBy=popularity&apiKey=7d09f398a54c486bafb218b5160eeb99`)
        .then((response) => response.json()).then((findResponse)=>{
            console.log(findResponse.articles)
            
            this.setState({news:findResponse.articles})
        })
        // .then((data)=> {
        //     this.setState({news:data})
        // })
    }

  render() {
    return (
      <div>
        <br/> 
        Enter Location to search for news<br/>
        <Input type='text' placeholder='Search...' onChange={(text)=>{ 
            this.setState({loc:text.target.value})
            console.log(this.state.loc)
            }} />&nbsp;&nbsp;
        <Button onClick={()=>{this.onSearch()}}>Search</Button><br/><br/>
        <Grid columns={4}>
        {
            this.state.news.map((item,i)=>(
           
           
               <Grid.Column key={i}>
                   <Card.Group >  
            <Card>
            <Image size='large' src={item.urlToImage} />
            <Card.Content>
                <Card.Header> {item.title}</Card.Header>
                <Card.Meta>
                <span className='date'>Student, Thapar University<br/>deepak@gmail.com</span>
                </Card.Meta>
                <Card.Description> {item.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={item.url}>
                <Icon name='search' /> Read More
                </a>
            </Card.Content>
            </Card>
            </Card.Group>
               </Grid.Column>
           
                
                
                // <Card  fluid key={i}>
                // <Card.Header textAlign='left'>
                //     {item.title}
                // </Card.Header>
                // <Card.Content textAlign='left'>
                // <img src={item.urlToImage} width='200px' height='200px'/>
                // </Card.Content>
                // <Card.Content textAlign='center'>
                    
                //     {item.description}
                // </Card.Content>
                // </Card>
            ))
        }
        </Grid>

      </div>
    )
  }
}
